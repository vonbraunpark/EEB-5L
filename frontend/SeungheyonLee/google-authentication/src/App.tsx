// import React from "react";
// import ReactDOM from "react-dom/client";
//
// import "./index.css";
//
// const App = () => {
//     return(
//         <div className="mt-10 text-3xl mx-auto max-w-6xl">
//             <div>Name: google-authentication</div>
//             <div>Framework: react-18</div>
//         </div>
//     )
// };
// export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GoogleAuthenticationRouter from "./router/GoogleAuthenticationRouter.tsx";

const App: React.FC = () => {
    console.log("✅ AuthenticationApp 렌더링됨");

    return (
        <GoogleAuthenticationRouter/>
    );
}

export default App;
