import React from "react";
import Banner from "../../components/Banner/Banner";
import FreshFruit from "../../components/FreshFruit/FreshFruit";
import HotDishes from "../../components/HotDishes/HotDishes";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-main">
            <Banner />
            <FreshFruit />
            <HotDishes />
        </div>
    );
};

export default Home;
