import * as React from 'react';
import logo from './aluminum-falcon.png'
import Board from "../Board/Board";
import './Game.css';

class Game extends React.Component {
    public render() {
        return (
            <div className="Game">
                <header className="Game-header">
                    <img src={logo} className="Game-logo" alt="logo" />
                    <h1 className="Game-title">What a piece of junk!</h1>
                </header>
                <Board />
            </div>
        );
    }
}

export default Game;