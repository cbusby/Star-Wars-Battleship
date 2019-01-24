import {shallow} from 'enzyme';
import * as React from 'react';
import LandingPage from "./LandingPage";

describe('LandingPage', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    let fakeCreateGameService: jest.Mock

    const createGameResponse = {
        "status": "AWAITING_SHIPS",
        "player_1": {},
        "player_2": {}
    }

    beforeEach(() => {
        component = shallow(<LandingPage/>);
        fakeCreateGameService = jest.fn().mockReturnValueOnce({ status: 201, createGameResponse});
    });

    it('renders a create game button', () => {
        expect(component.find('.CreateGameButton')).toHaveLength(1);
    });
    it('renders a button with the text Start Game on it', () => {
        expect(component.find('.CreateGameButton').first().text()).toBe("Start Game")
    });
    it("clicking button calls backend to create game", () => {
        expect(fakeCreateGameService).toHaveBeenCalled()
    });

});
