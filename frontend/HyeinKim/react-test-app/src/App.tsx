import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionalRenderTest from "./basics/ConditionalRenderTest.tsx";
import ToDoListTest from "./basics/ToDoListTest.tsx";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <HelloPropsTest/>
    <div>Name: react-test-app</div>
    <div>Framework: react-18</div>
    <SimpleCounter/>
    <ConditionalRenderTest/>
    <ToDoListTest/>
  </div>
);

export default App // 외부에서 받을 수 있게 함