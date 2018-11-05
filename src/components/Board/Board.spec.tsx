import { shallow } from 'enzyme';
import * as React from 'react';
import Board from './Board';

describe('Board', () => {
    it('renders without crashing', () => {
        expect(shallow(<Board />).contains(<div className="Board" />)).toBe(true);
    });
});
