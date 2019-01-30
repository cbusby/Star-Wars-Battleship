import * as React from 'react';
import Game from './Game';
import {shallow} from "enzyme";
import LandingPage from "../LandingPage/LandingPage";
import Board from "../Board/Board";

describe('Game', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Game gameId=""/>);
    });

    it('renders landing page by default', () => {
        expect(component.find(LandingPage)).toHaveLength(1);
    });
    
    it('renders the Board page when string is not empty', () => {
        component = shallow(<Game gameId="asdf234"/>);

        expect(component.find(Board)).toHaveLength(1);
    });

});

