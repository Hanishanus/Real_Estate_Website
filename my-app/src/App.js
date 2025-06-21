import logo from './logo.svg';
import './App.css';
// App.js

import Navbar from "./Components/Navbar"
//import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Features from "./Components/Feature";
import Sales from "./Components/Onsale";
import About from "./Components/About";

import "./index.css";
function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Features />
            <Sales />
            
        </div>
    );
}

export default App;
//<Footer />
