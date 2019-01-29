
import CreateGameService from './CreateGameService';
import axios from 'axios';

jest.mock('axios')

describe('CreateGameService', () => {
    let fakeCreateGameService: CreateGameService


    beforeEach(() => {
        fakeCreateGameService = new CreateGameService(); 
    });

    it('When createGame is called, axios should initiate a post to create game', done => {
        axios.prototype.post = jest.fn().mockResolvedValue(()=> 
        {   
            return { 
                status:201,
                headers:{location:12},
                data:'{\"status\":\"AWAITING_SHIPS\",\"player_1\":{},\"player_2\":{}}'
            }
        });
        function mockCallback(data: any) {
            expect(data).toBe(12);
            done();
        }
        fakeCreateGameService.createGame(mockCallback);
        //fakeCreateGameService.postIt("https://oazcld7fii.execute-api.us-east-2.amazonaws.com/prod/swb")
        expect(axios.post).toHaveBeenCalledWith("https://oazcld7fii.execute-api.us-east-2.amazonaws.com/prod/swb");
    });
});
