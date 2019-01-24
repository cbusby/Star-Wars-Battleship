import { shallow } from 'enzyme';
import * as React from 'react';
import Board from "../Board/Board";

describe('Board', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Board />);
    });

    it('', () => {
        expect(component.find('.BoardRow')).toHaveLength(10);
    });
});