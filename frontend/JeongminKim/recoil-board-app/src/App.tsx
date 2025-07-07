import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from 'recoil'

import "./index.css";
import TextInput from "./ui/components/TextInput.tsx";
import TextDisplay from "./ui/components/TextDisplay.tsx";
import PostList from "./ui/components/PostList.tsx";

const App = () => (
    <RecoilRoot>
        <div className="min-h-screen flex flex-col items-center
                        justify-center bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Simple Recoil Example</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-wd">
                <TextInput/>
                <TextDisplay/>
            </div>
        </div>
        <PostList/>
    </RecoilRoot>
);

export default App