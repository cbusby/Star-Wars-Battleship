import { shallow } from 'enzyme';
import * as React from 'react';
import Board from './Board';
import Square from '../Square/Square';

describe('Board', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Board />);
    });

    it('renders squares', () => {
        expect(component.find(Square)).toHaveLength(100);
    });

    it('renders squares in 10 rows', () => {
        expect(component.find('.BoardRow')).toHaveLength(10);
    });
});
