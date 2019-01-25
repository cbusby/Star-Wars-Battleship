import {shallow} from 'enzyme';
import * as React from 'react';
import LandingPage from "./LandingPage";
import CreateGameService from './CreateGameService';



describe('LandingPage', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    let fakeCreateGameService: CreateGameService

    beforeEach(() => {
        fakeCreateGameService = new CreateGameService(); 
        fakeCreateGameService.createGame = jest.fn().mockReturnValue("");

        component = shallow(<LandingPage createGameService={fakeCreateGameService}/>);
    });

    it('renders a create game button', () => {
        expect(component.find('.CreateGameButton')).toHaveLength(1);
    });
    it('renders a button with the text Start Game on it', () => {
        expect(component.find('.CreateGameButton').first().text()).toBe("Start Game")
    });
    it("clicking button calls backend to create game", () => {
        component.find('button').simulate('click');
        expect(fakeCreateGameService.createGame).toHaveBeenCalled()
    });



});
