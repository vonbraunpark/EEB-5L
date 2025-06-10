import React from "react";

import "./index.css";
import {Container, Typography} from "@mui/material";
import HelloPropsTest from "./basics/HelloPropsTest.tsx";

//
// const App = () => (
//     <div className="mt-10 text-3xl mx-auto max-w-6xl">
//         <HelloPropsTest/>
//         <div>Name: practice-app</div>
//         <div>Framework: react-18</div>
//     </div>
// )
const App = () => {
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <HelloPropsTest/>
            <div>Name: practice-app</div>
            <div>Framework: react-18</div>
        </div>
    )
}

export default App;