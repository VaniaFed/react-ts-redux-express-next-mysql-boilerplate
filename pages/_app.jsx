import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { configureStore } from 'src/store';

import 'src/global.scss';

const store = configureStore();
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;
