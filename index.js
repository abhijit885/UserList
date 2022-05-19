/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './store/store';
import { Provider } from 'react-redux';

const ReduxAppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxAppWrapper);
