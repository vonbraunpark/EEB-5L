import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionalRenderTest from "./basics/ConditionalRenderTest.tsx";
import TodoList from "./basics/TodoList.tsx";
import { Provider } from "react-redux";
import {store} from "./state/store.ts";
import ReduxCounterTest from "./basics/ReduxCounterTest.tsx";

import PostLine from "./basics/PostLine.tsx";

const App = () => (
    <Provider store={store}>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: react-test-app</div>
            <div>Framework: react-18</div>
            <SimpleCounter/>
            <ConditionalRenderTest/>
            <TodoList/>
            <ReduxCounterTest/>
            <PostLine/>
        </div>
    </Provider>
)

export default App;