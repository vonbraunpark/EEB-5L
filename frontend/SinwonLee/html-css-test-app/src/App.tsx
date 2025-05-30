import ReactDOM from "react-dom/client";

import "./style/main.css";
import {Typography} from "@mui/material";

const App = () => {
    return (
        <div className="container">
            <Typography variant="h5" gutterBottom>
                HTML & CSS 학습 공간
            </Typography>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;