import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './Board';
//import Square from '../Square/Square';

it('renders without crashing', () => {
    expect(shallow(<Board />).contains(<div className="Board" ></div>)).toBe(true);
});

// it('should render Squares', () => {
//     let component = shallow(<Board />);
//
//     expect(component.find(Square)).toHaveLength(100);
// });

