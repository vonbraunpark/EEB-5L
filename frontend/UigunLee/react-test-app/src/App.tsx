import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsdTest from "./basics/HelloPropsdTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <HelloPropsdTest/>
        <div>Name: navigation-bar-app</div>
        <div>Framework: react-18</div>
        <SimpleCounter/>
    </div>
);

export default App