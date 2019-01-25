import * as React from 'react';
import './LandingPage.css';
import CreateGameService from "./CreateGameService";
import ILandingPage from './LandingPageInterface';

class LandingPage extends React.Component<ILandingPage,{}> {

    public createGameService: CreateGameService;
    
    constructor(props: ILandingPage) {
        super(props);
        this.createGameService = props.createGameService;
    }

    public render() {
        return (
            <button className="CreateGameButton" onClick={this.createGameService.createGame}>Start Game</button>
        );
    }
}

export default LandingPage;  