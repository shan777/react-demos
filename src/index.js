import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider is a component
import { createStore } from 'redux'; //importing part of it so inside {}
import rootReducer from './reducers';

import App from './components/app';

const store = createStore(rootReducer); //creates redux store (state)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
