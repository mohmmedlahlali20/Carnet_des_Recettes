import React from 'react';
import AppNavigator from "./components/AppNavigator.tsx";
import {Provider} from "react-redux";
import store from "./redux/store/store.ts";

export default function App() {
    return (

        <Provider store={store}>
            <AppNavigator />
        </Provider>

    );
}
