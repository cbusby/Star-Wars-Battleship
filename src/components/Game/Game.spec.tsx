import * as React from 'react';
import Game from './Game';
import {shallow} from "enzyme";
import Board from "../Board/Board";
import LandingPage from "../LandingPage/LandingPage";

describe('Game', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<Game />);
    });

    it('renders the game board when there is game data', () => {
        component.setState({
            game: {
                gameID: "123456",
                status: "AWATING_PLAYER",
                player_1: {},
                player_2: {}
            }
        });
        expect(component.find(Board)).toHaveLength(1);
    });

    it('renders landing page by default', () => {
        expect(component.find(LandingPage)).toHaveLength(1);
    });

    // it('renders the landing page when state is empty', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Game />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

});

