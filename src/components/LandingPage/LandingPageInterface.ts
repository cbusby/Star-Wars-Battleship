import CreateGameService from "./CreateGameService";
import StarishWarsState from '../StarishWarsState';

export default interface ILandingPage {
    createGameService: CreateGameService;
    mystate: StarishWarsState;
}