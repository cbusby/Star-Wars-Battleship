import * as React from 'react';
import './LandingPage.css';
import ILandingPage from './LandingPageInterface';
import StarishWarsState from '../StarishWarsState';
import CreateGameService from './CreateGameService';

class LandingPage extends React.Component<ILandingPage, StarishWarsState> {
    public createGameService: CreateGameService;
    
    constructor(props: ILandingPage) {
        super(props);
        this.createGameService = props.createGameService || new CreateGameService();
        this.state = props.mystate || { gameId: -1};
        this.createGame = this.createGame.bind(this)
    }

    public createGame()
    {
        const newGameId = this.props.createGameService.createGame();
        this.setState({ gameId: newGameId});
    }
    public render() {

        return (
            <button className="CreateGameButton" onClick={this.createGame}>Start Game</button>
        );
    }
}

export default LandingPage;  