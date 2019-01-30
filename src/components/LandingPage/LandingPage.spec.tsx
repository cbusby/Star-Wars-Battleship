import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import LandingPage from "./LandingPage";
import CreateGameService from './CreateGameService';
import StarishWarsState from '../StarishWarsState';
import ILandingPage from './LandingPageInterface';


describe('LandingPage', () => {
    let component: ShallowWrapper<ILandingPage, StarishWarsState>;
    let fakeCreateGameService: CreateGameService
    let myState : StarishWarsState

    beforeEach(() => {
        fakeCreateGameService = new CreateGameService(); 
        fakeCreateGameService.createGame = jest.fn().mockReturnValue(1);
        myState = {gameId: "1n2k2n4"}
        component = shallow(<LandingPage createGameService={fakeCreateGameService} mystate={myState} />);
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
    it("has a game id in state store after button is clicked", () => {
        component.find('button').simulate('click');
        expect(component.state().gameId).not.toBe(undefined);
        expect(component.state().gameId).not.toBe('');
    });
});
