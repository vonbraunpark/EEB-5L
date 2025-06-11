import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {Container, Typography} from "@mui/material";
import {CalculationExample} from "./math_operation/CalculationExample.tsx";
import {VariableDataTypes} from "./data_type/VariableDataTypes.tsx";
import {LogicalOperationExample} from "./logical_operation/LogicalOperationExample.tsx";
import {TypeCoercion} from "./type_convert/TypeCoercion.tsx";
import {ControlFlowIf} from "./control_flow/ControlFlowIf.tsx";
import {ControlFlowFor} from "./control_flow/ControlFlowFor.tsx";
import {ControlFlowSwitch} from "./control_flow/ControlFlowSwitch.tsx";
import {ControlFlowForEach} from "./control_flow/ControlFlowForEach.tsx";
import {MapExample} from "./map/MapExample.tsx";
import {FilterExample} from "./filter/FilterExample.tsx";
import {RegularExpression} from "./regular_expression/RegularExpression.tsx";
import {StringExample} from "./string_test/StringExample.tsx";
import {ArrayPushExample} from "./array/store/ArrayPushExample.tsx";
import {ArrayPopExample} from "./array/store/ArrayPopExample.tsx";
import {ArrayUnShiftExample} from "./array/ArrayUnShiftExample.tsx";
import {ArrayReduceExample} from "./array/store/ArrayReduceExample.tsx";
import {ArrayShiftExample} from "./array/store/ArrayShiftExample.tsx";
import {ArrayFindExample} from "./array/search/ArrayFindExample.tsx";
import {EmergencyQuiz} from "./quiz/EmergencyQuiz.tsx";
import {RandomExample} from "./quiz/RandomExample.tsx";
import {SecondQuix} from "./quiz/SecondQuix.tsx";
import {ArrayIncludesExample} from "./array/search/ArrayIncludesExample.tsx";
import {ArraySliceExample} from "./array/ArraySliceExample.tsx";
import {ArrayIndexOfExample} from "./array/search/ArrayIndexOfExample.tsx";
import {ArraySpliceExample} from "./array/ArraySpliceExample.tsx";
import {ArraySortExample} from "./array/sort/ArraySortExample.tsx";
import {ArrayReverseExample} from "./array/sort/ArrayReverseExample.tsx";
import {ArrayEveryExample} from "./array/ArrayEveryExample.tsx";

const App = () => {
    return (
        <Container maxWidth="md" sx={{padding: "32px 16px", textAlign: "left"}}>
            <Typography variant="h4" gutterBottom sx={{textAlign: "center"}}>
                JavaScript 필수 요소를 파악해보자!
            </Typography>
            <CalculationExample/>
            <VariableDataTypes/>
            <LogicalOperationExample/>
            <TypeCoercion/>
            <ControlFlowIf/>
            <ControlFlowSwitch/>
            <ControlFlowFor/>
            <ControlFlowForEach/>
            <MapExample/>
            <FilterExample/>
            <RegularExpression/>
            <StringExample/>
            <ArrayPushExample/>
            <ArrayPopExample/>
            <ArrayShiftExample/>
            <ArrayUnShiftExample/>
            <ArrayReduceExample/>
            <ArrayFindExample/>
            <EmergencyQuiz/>
            <SecondQuix/>
            <RandomExample/>
            <ArrayIncludesExample/>
            <ArrayIndexOfExample/>
            <ArraySliceExample/>
            <ArraySpliceExample/>
            <ArraySortExample/>
            <ArrayReverseExample/>
            <ArrayEveryExample/>
        </Container>
    )
};

export default App;