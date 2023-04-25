import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/image/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../../assets/image/avatar.png";
import "./Navbar.css";

const Navbar = ({ cart, setCart }) => {
    const { totalItem } = useSelector(state => state.productReducer);
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span>City</span>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Menu</Link>
                        </li>
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Service</Link>
                        </li>
                    </ul>
                    <div className="cart">
                        <MdShoppingBasket
                            className="cart-icon"
                            onClick={() => setCart(!cart)}
                        />
                        {totalItem > 0 && <span>{totalItem}</span>}
                    </div>
                    <motion.div className="avatar" whileTap={{ scale: 0.6 }}>
                        <img src={Avatar} alt="avatar" />
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
