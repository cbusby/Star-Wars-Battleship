import * as React from 'react';
import './LandingPage.css';
import ILandingPage from './LandingPageInterface';
import StarishWarsState from '../StarishWarsState';
import CreateGameService from './CreateGameService';
//import { render } from 'enzyme';
//import { debug } from 'util';

class LandingPage extends React.Component<ILandingPage, StarishWarsState> {
    public createGameService: CreateGameService;
    
    constructor(props: ILandingPage) {
        super(props);
        this.createGameService = props.createGameService || new CreateGameService();
        this.state = props.mystate || { gameId: -1};
    }

    public createGame = () =>
    {
        this.createGameService.createGame(this.gameCreated);
    }

    public gameCreated = (myGameId: number) =>
    {
        this.setState({gameId: myGameId})
        this.render();
    }
 
    public render() {
        return (
            <div>
                <button className="CreateGameButton" onClick={this.createGame}>Start Game</button>
                <div>Game Id: '{this.state.gameId}'</div>
            </div>
        );
    }
}

export default LandingPage;  