import * as React from 'react';
import Square from "../Square/Square";
import './Board.css';

class Board extends React.Component {

    public generateIndices() {
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
                    this.generateIndices().map((row) => (
                        <div className="BoardRow" id={row[0].toString()} key={"r"+row[0].toString()}>
                            {row.map(index => this.renderSquare(index))}
                        </div>
                    ))
                }
            </div>
        );
    }

    public renderSquare(index: number) {
        return <Square key={index.toString()} value={index.toString()}/>;
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