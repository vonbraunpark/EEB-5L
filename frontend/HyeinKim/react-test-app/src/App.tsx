import React, {ReactNode} from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionalRenderTest from "./basics/ConditionalRenderTest.tsx";
import ToDoListTest from "./basics/ToDoListTest.tsx";
import ReduxCounterTest from "./basics/ReduxCounterTest.tsx";
import {store} from "./state/store.ts";
import { Provider } from "react-redux";

const App = () => (
    <Provider store={store}>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <HelloPropsTest/>
            <div>Name: react-test-app</div>
            <div>Framework: react-18</div>
            <SimpleCounter/>
            <ConditionalRenderTest/>
            <ToDoListTest/>
            <ReduxCounterTest/>
        </div>
    </Provider>
);

export default App // 외부에서 받을 수 있게 함