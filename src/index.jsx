import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import App from './components/App';
import Stb from "./components/Stb";

if (__DEV__ || __STAGING__) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
}

// Get root element
const rootEl = document.getElementById('app');

// Render given component into root element
const render = (Component) => {
    ReactDOM.render(
        <Component />,
        rootEl
    );
};

/**
 * The init function is used to be sure, that chayns® will be ready until render() is called
 * @return {Promise.<void>}
 */
async function init() {
    try {
        // Wait until chayns® is ready
        await chayns.ready;
        const isLitfassDevice = chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet;

        if (chayns.env.user.name === 'Marvin Liedmeyer' || (chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet)) {
            render(Stb);
        } else {
            // Render App
            render(App);
        }


    } catch (err) {
        console.warn('no chayns environment found', err);
    }
}

init();
