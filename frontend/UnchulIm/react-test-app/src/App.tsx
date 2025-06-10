import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";
import SimpleCounter from "./basics/SimpleCounter.tsx";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <HelloPropsTest/>
        <SimpleCounter/>
        <div>Name: navigation-bar-app</div>
        <div>Framework: react-18</div>
    </div>
);

export default App