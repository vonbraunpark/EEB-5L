import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionalRenderTest from "./basics/ConditionalRenderTest.tsx";
import TodoListTest from "./basics/TodoListTest.tsx";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <HelloPropsTest/>
    <div>Name: react-test-app</div>
    <div>Framework: react-18</div>
    <SimpleCounter/>
    <ConditionalRenderTest/>
      <TodoListTest/>
  </div>
);

export default App