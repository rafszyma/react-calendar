import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

ReactDOM.hydrate(
    <App />,
    document.getElementById('mountNode'),
);