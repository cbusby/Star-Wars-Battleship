package main

import (
	"bytes"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

var errorLogger = log.New(os.Stderr, "ERROR ", log.Llongfile)

func router(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch req.HTTPMethod {
	case "GET":
		return show(req)
	case "POST":
		return create(req)
	default:
		return clientError(http.StatusMethodNotAllowed, "cannot respond to method "+req.HTTPMethod)
	}
}

func show(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	bucket := "aluminum-falcon"
	gameFile := req.PathParameters["gameId"]
	sess, _ := session.NewSession(&aws.Config{Region: aws.String("us-east-2")})
	svc := s3.New(sess)
	input := &s3.GetObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String("games/" + gameFile + ".json"),
	}
	result, err := svc.GetObject(input)
	if err != nil {
		return serverError(err, "failed getting object: "+gameFile)
	}
	if result == nil {
		return clientError(http.StatusNotFound, "object not found: "+gameFile)
	}
	buf := bytes.NewBuffer(nil)
	n, err := io.Copy(buf, result.Body)
	if err != nil {
		return serverError(err, "failed reading object: "+gameFile)
	}
	contents := string(buf.Bytes()[:n])
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       contents,
	}, nil
}

func create(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	bucket := "aluminum-falcon"
	gameFile := req.PathParameters["gameId"]
	payload := req.Body
	sess, _ := session.NewSession(&aws.Config{Region: aws.String("us-east-2")})
	uploader := s3manager.NewUploader(sess)
	_, err := uploader.Upload(&s3manager.UploadInput{
		Bucket: aws.String(bucket),
		Key:    aws.String("games/" + gameFile + ".json"),
		Body:   strings.NewReader(payload),
	})
	if err != nil {
		serverError(err, "failed uploading object: "+gameFile)
	}
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       payload,
	}, nil
}

func serverError(err error, message string) (events.APIGatewayProxyResponse, error) {
	errorLogger.Println(err.Error())

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusInternalServerError,
		Body:       message,
	}, nil
}

func clientError(status int, message string) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode: status,
		Body:       message,
	}, nil
}

func main() {
	lambda.Start(router)
}
