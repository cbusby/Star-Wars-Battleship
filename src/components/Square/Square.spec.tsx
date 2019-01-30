import * as React from 'react';
import Square from './Square';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
    shallow(<Square value={"1"} />);
});
