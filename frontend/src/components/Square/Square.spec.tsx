import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Square from './Square';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square />, div);
    ReactDOM.unmountComponentAtNode(div);
});
