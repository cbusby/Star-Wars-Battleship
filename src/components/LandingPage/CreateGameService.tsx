import axios from 'axios';
import Config from '../../Config';

class CreateGameService 
{
    public createGame(gameCreated:any) {
        let gameId = ""

        axios.post(Config.baseApiUrl)
            .then(res=>{
                gameId=res.headers.location;
                gameCreated(gameId)
            })
            .catch((e)=>console.log("There an error! " + e.message));
    }
}

export default CreateGameService;