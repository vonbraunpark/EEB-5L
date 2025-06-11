import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";
import ConditionRenderTest from "./basics/ConditionRenderTest.tsx";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <HelloPropsTest></HelloPropsTest>
        <div>Name: practice-app</div>
        <div>Framework: react-18</div>
        <SimpleCounter></SimpleCounter>
        <ConditionRenderTest></ConditionRenderTest>
    </div>
);

export default App