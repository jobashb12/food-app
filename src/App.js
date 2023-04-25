import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [cart, setCart] = useState(false);
    return (
        <div className="app-main">
            <Router>
                <Navbar cart={cart} setCart={setCart} />
                {cart && <Cart cart={cart} setCart={setCart} />}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
