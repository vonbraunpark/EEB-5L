import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//"htmlCssTestApp"이라는 이름으로 등록된 앱에서 "App"이라는 컴포넌트를 불러오겠다"
// 이건 그냥 로컬에서 import 하는 게 아니라 "다른 앱(html-css-test-app)이 외부로 제공한 컴포넌트를 동적으로 불러오는" 거야.
const HtmlCssTestApp = lazy(() => import("htmlCssTestApp/App"));

const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/html-css-test" element={<HtmlCssTestApp />} />
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
root.render(<App />);