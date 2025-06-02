import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {Typography} from "@mui/material";
import {CalculationExample} from "./math_operation/CalculationExample.tsx";

const App = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                JavaScript 필수 요소를 파악해보자!
            </Typography>
            <CalculationExample/>
        </div>
    )
}

export default App;