import { shallow } from 'enzyme';
import * as React from 'react';
import LandingPage from "./LandingPage";

describe('LandingPage', () => {
    let component: import("../../../node_modules/@types/enzyme/index").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = shallow(<LandingPage />);
    });

    it('renders a create game button', () => {
        expect(component.find('.CreateGameButton')).toHaveLength(1);
    });
});
