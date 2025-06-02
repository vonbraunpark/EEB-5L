import "./index.css";
import {Container, Typography} from "@mui/material";
import {CalculationExample} from "./math_operation/CalculationExample.tsx";
import {VariableAndDataTypes} from "./data_type/VariableAndDataTypes.tsx";
import {LogicalOperationExample} from "./Logical_operation/LogicalOperationExample.tsx";
import {TypeCoercion} from "./type_coercion/TypeCoercion.tsx";
import {ControlFlowIf} from "./control_flow/ControlFlowIf.tsx";

const App = () => {
    return (

        <Container maxWidth="md" sx={{padding: "32px 16px", textAlign: "left"}}>
            <Typography variant="h4" gutterBottom sx={{textAlign: "center"}}>
                JavaScript 필수 요소를 파악해보자!
            </Typography>

            <CalculationExample/>
            <VariableAndDataTypes/>
            <LogicalOperationExample/>
            <TypeCoercion/>
            <ControlFlowIf/>
        </Container>
    )
}
export default App;