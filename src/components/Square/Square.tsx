import * as React from 'react';
import './Square.css';
import SquareInterface from './SquareInterface';

class Square extends React.Component<SquareInterface, {}> {

    constructor(props: SquareInterface) {
        super(props);
    }

    public render() {
        return (
            <div className='square' id={this.props.value}/>
        );
    }
}

export default Square;