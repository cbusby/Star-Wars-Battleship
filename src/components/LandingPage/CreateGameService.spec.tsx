
import CreateGameService from './CreateGameService';
import axios from 'axios';
import Config from '../../Config';

jest.mock('axios')

describe('CreateGameService', () => {
    let createGameService: CreateGameService

    beforeEach(() => {
        createGameService = new CreateGameService(); 
    });

    it('When createGame is called, axios should initiate a post to create game', done => {
        expect.assertions(2);
        
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
                expect(axios.post).toHaveBeenCalledWith(Config.baseApiUrl);
                done();
        });
        
        setTimeout(()=>
        {
            createGameService.createGame(mockCallback);
        })
    });
});
