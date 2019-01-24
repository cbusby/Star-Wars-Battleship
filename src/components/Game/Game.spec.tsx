import * as React from 'react';
import Game from './Game';
import {shallow} from "enzyme";
import LandingPage from "../LandingPage/LandingPage";

describe('Game', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Game />);
    });

    it('renders landing page by default', () => {
        expect(component.find(LandingPage)).toHaveLength(1);
    });

});

