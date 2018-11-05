import * as React from 'react';
import Square from "../Square/Square";
import './Board.css';

class Board extends React.Component {
    public generateIndecies() {
        const rows = [];
        let counter = 0;
        for (let i = 0; i < 10; i++) {
            const squares = [];
            for (let j = 0; j < 10; j++) {
                squares.push(counter);
                counter++;
            }
            rows.push(squares);
        }
        return rows;
    }

    public renderGrid() {
        return (
            <div className="Grid">
                {
                    this.generateIndecies().map((row, index) => (
                        <div className="BoardRow" key={row[0]}>
                            {row.map(cellId => this.renderSquare(cellId))}
                        </div>
                    ))
                }
            </div>
        );
    }

    public renderSquare(index: number) {
        return <Square key={index}/>;
    }

    public render() {
        return (
            <div className="Board">
                {this.renderGrid()}
            </div>
        );
    }
}

export default Board;