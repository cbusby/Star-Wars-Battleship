import axios from 'axios';
class CreateGameService 
{
    public createGame(gameCreated:any) {
        let gameId = -1

        axios.post("https://oazcld7fii.execute-api.us-east-2.amazonaws.com/prod/swb")
            .then(res=>{
                gameId=res.headers.location;
                gameCreated(gameId)
            })
            .catch((e)=>console.log("There an error! " + e.message));
    }
}

export default CreateGameService;