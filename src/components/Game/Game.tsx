import * as React from 'react';
import logo from './aluminum-falcon.png'
import Board from "../Board/Board";
import './Game.css';
import LandingPage from "../LandingPage/LandingPage";
import CreateGameService from "../LandingPage/CreateGameService";
import StarishWarsState from '../StarishWarsState';

class Game extends React.Component<{ gameId: string}, StarishWarsState> {
    constructor(props: {gameId: string}) {
        super(props);
        const gameId = props.gameId || "";
        const newState = { gameId }
        this.state = newState;
    }

    public render() {
        let body;

        if(this.state.gameId) {
            body = <Board />;
        } else {
            body = <LandingPage createGameService = {new CreateGameService()} mystate={this.state} />;
        }
        return (
            <div className="Game">
                <header className="Game-header">
                    <img src={logo} className="Game-logo" alt="logo" />
                    <h1 className="Game-title">What a piece of junk!</h1>
                </header>

                { body }
            </div>
        );
    }
}

export default Game;