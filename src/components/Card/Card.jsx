import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";

const Card = ({ data }) => {
    const dispatch = useDispatch();
    const addProduct = product => {
        dispatch({
            type: "ADD_PRODUCT",
            product,
        });
    };
    return (
        <div className="card-container" key={data.id}>
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="card-img">
                        <img src={data.img} alt={data.name} />
                    </div>
                    <motion.div
                        className="card-icon"
                        whileTap={{ scale: 0.6 }}
                        onClick={() => addProduct(data)}
                    >
                        <MdShoppingBasket />
                    </motion.div>
                </div>
                <div className="card-body">
                    <h3>{data.name}</h3>
                    <p className="cal">{data.cal} Calories</p>
                    <p className="price">
                        $ <span>{data.price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
