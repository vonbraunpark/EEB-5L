import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionalRenderTest from "./basics/ConditionalRenderTest.tsx";
import TodoList from "./basics/TodoList.tsx";

const App = () => {
    return(
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: react-test-app</div>
            <div>Framework: react-18</div>
            <SimpleCounter/>
            <ConditionalRenderTest/>
            <TodoList/>
        </div>
    )
}


export default App;