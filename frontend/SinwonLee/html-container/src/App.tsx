import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import {CircularProgress} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const NavigationBarApp = lazy(() => import("navigationBarApp/App"));
const HtmlCssTestApp = lazy(() => import("htmlCssTestApp/App"));
const JavascriptTestApp = lazy(() => import("javascriptTestApp/App"));
const ReactTestApp = lazy(() => import("reactTestApp/App"));
const KakaoAuthenticationApp = lazy(() => import("KakaoAuthenticationApp/App"))
const GoogleAuthenticationApp = lazy(() => import("googleAuthenticationApp/App"));


const App = () => {
    const [isNavigationBarLoaded, setIsNavigationBarLoaded] = useState(false);

    useEffect(() => {
        import("navigationBarApp/App")
            .then(() => setIsNavigationBarLoaded(true))
            .catch((err) => console.error("Failed to load navigation bar:", err));
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress/>}>
                <NavigationBarApp/>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>}/>
                    <Route path="/html-css-test" element={<HtmlCssTestApp/>}/>
                    <Route path="/js-test" element={<JavascriptTestApp/>}/>
                    <Route path="/ReactTestApp" element={<ReactTestApp/>}/>
                    <Route path="/kakao" element={<KakaoAuthenticationApp/>}/>
                    <Route path="/google-authentication/*" element={<GoogleAuthenticationApp/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App/>);