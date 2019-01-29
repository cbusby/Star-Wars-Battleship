import axios from 'axios';
// import { SSL_OP_EPHEMERAL_RSA } from 'constants';
// open -a "Google Chrome" --args "--disable-web-security"
class CreateGameService 
{
    public createGame(gameCreated:any) {
        let gameId = -1
        

        this.postIt("https://oazcld7fii.execute-api.us-east-2.amazonaws.com/prod/swb")
            .then(res=>{
                gameId=res.headers.location;
                gameCreated(gameId)
            })
            .catch((e)=>console.log("There an error! " + e.message));
    }

    private async postIt(url:string)
    {
        const request = await axios.post(url);
        return request
    }
}

export default CreateGameService;