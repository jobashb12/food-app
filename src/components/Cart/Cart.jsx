import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import F3 from "../../assets/image/f3.png";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import EmptyCart from "../../assets/image/emptyCart.svg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
    const dispatch = useDispatch();
    const { products, totalPrice } = useSelector(state => state.productReducer);
    const increment = id => {
        dispatch({
            type: "INCREMENT",
            id,
        });
    };
    const decrement = id => {
        dispatch({
            type: "DECREMENT",
            id,
        });
    };
    const clearItem = () => {
        dispatch({ type: "CLEAR_ALL" });
    };
    return (
        <motion.div
            className="cart-main"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
        >
            <motion.div className="cart-header">
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="cart-close"
                    onClick={() => setCart(!cart)}
                >
                    <MdOutlineKeyboardBackspace />
                </motion.div>
                <p>Cart</p>
                <motion.div
                    className="cart-clear"
                    whileTap={{ scale: 0.75 }}
                    onClick={clearItem}
                >
                    Clear
                    <RiRefreshFill className="refresh-icon" />
                </motion.div>
            </motion.div>
            {products.length > 0 ? (
                <div className="cart-body">
                    <div className="cart-items">
                        {products.map(p => {
                            return (
                                <div key={p.id} className="cart-item">
                                    <div className="cart-img">
                                        <img src={p.img} alt={p.name} />
                                    </div>
                                    <div className="cart-detail">
                                        <p>{p.name}</p>
                                        <span>$ {p.price * p.qty}</span>
                                    </div>
                                    <div className="cart-quantity">
                                        <BiMinus
                                            className="minus-icon"
                                            onClick={() => decrement(p.id)}
                                        />
                                        <div className="quantity">{p.qty}</div>
                                        <BiPlus
                                            className="plus-icon"
                                            onClick={() => increment(p.id)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cart-footer">
                        <div className="sub-total">
                            <h4>Sub Total</h4>
                            <p>$ {totalPrice}</p>
                        </div>
                        <div className="cart-delivery">
                            <h4>Delivery</h4>
                            <p>$ 2.5</p>
                        </div>
                        <hr />
                        <div className="cart-total">
                            <h3>Total</h3>
                            <p>$ {totalPrice + 2.5}</p>
                        </div>
                        <motion.button whileTap={{ scale: 0.75 }}>
                            Login to check out
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div className="cart-empty">
                    <img src={EmptyCart} alt="EmptyCart" />
                    <h3>Add some items to your cart</h3>
                </div>
            )}
        </motion.div>
    );
};

export default Cart;
