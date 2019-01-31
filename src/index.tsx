import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './components/Game/Game'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Game gameId="" />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();