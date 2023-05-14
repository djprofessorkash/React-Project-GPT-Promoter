// Importing React library into namespace
import React from "react";

// Importing custom components and containers
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";

// Define main application with relevant custom components and containers
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar /> 
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;