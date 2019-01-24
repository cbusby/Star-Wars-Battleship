import * as React from 'react';
import './LandingPage.css';
import CreateGameService from "./CreateGameService";


class LandingPage extends React.Component {

    createGameService: CreateGameService;

    constructor(props: CreateGameService) {
        super(props);
        this.createGameService = props;
    }

    public render() {
        return (
            <button className="CreateGameButton" onClick={()=>this.createGameService.createGame()}>Start Game</button>
        );
    }
}

export default LandingPage;