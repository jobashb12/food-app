import React, { useRef } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import { fruits } from "../../Data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./FreshFruit.css";

const FreshFruit = () => {
    const ref = useRef();
    const cardScroll = value => {
        ref.current.scrollLeft += value;
    };
    return (
        <div className="fresh-container">
            <div className="fresh-head">
                <h2>Our Fresh & Healthy Fruits</h2>
                <hr />
            </div>
            <div className="fresh-card" ref={ref}>
                {fruits.map(data => {
                    return <Card data={data} />;
                })}
            </div>
            <div className="card-btn">
                <motion.div
                    className="arrow"
                    whileTap={{ scale: 0.7 }}
                    onClick={() => cardScroll(-300)}
                >
                    <MdKeyboardArrowLeft />
                </motion.div>

                <motion.div
                    className="arrow"
                    whileTap={{ scale: 0.7 }}
                    onClick={() => cardScroll(300)}
                >
                    <MdKeyboardArrowRight />
                </motion.div>
            </div>
        </div>
    );
};

export default FreshFruit;
