import * as React from 'react';
import logo from './aluminum-falcon.png'
import Board from "../Board/Board";
import './Game.css';
import LandingPage from "../LandingPage/LandingPage";

const initialState = { hasGameId: false };
type State = Readonly<typeof initialState>
class Game extends React.Component {
    public readonly state: State = initialState;

    public render() {
        let body;

        if(this.state.hasGameId) {
            body = <Board />;
        } else {
            body = <LandingPage />;
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