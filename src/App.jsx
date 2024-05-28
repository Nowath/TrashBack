import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/page/Main.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <div className="h-screen bg-[#E1F0DA] w-screen flex flex-col justify-center items-center overflow-hidden relative">
            <Layout />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
