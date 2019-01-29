
import CreateGameService from './CreateGameService';
import axios from 'axios';

jest.mock('axios')

describe('CreateGameService', () => {
    let fakeCreateGameService: CreateGameService

    beforeEach(() => {
        fakeCreateGameService = new CreateGameService(); 
    });

    it('When createGame is called, axios should initiate a post to create game', done => {
        axios.post = jest.fn().mockImplementationOnce(async (url:string)=> 
            {   
            return Promise.resolve({ 
                status:201,
                headers:{location:12},
                data:'{\"status\":\"AWAITING_SHIPS\",\"player_1\":{},\"player_2\":{}}'
            })
        });
        const mockCallback = jest.fn()
        .mockImplementationOnce((data: any) => {
            expect(data).toBe(12);
            done()
        });

        setTimeout(()=>
        {
            fakeCreateGameService.createGame(mockCallback);
            expect(axios.post).toHaveBeenCalledWith("https://oazcld7fii.execute-api.us-east-2.amazonaws.com/prod/swb");
            expect(mockCallback).toBeCalledTimes(1);
        })
    });
});
