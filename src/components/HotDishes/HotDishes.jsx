import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { hotDishes } from "../../Data";
import HotTitleCard from "../HotTitleCard/HotTitleCard";
import "./HotDishes.css";

const HotDishes = () => {
    const [title, setTitle] = useState("Chicken");
    const [hotDish, setHotDish] = useState();

    useEffect(() => {
        const filterData = hotDishes.filter(
            f => f.category === title.toLowerCase()
        );

        setHotDish(filterData);
    }, [title]);

    return (
        <div className="hot-container">
            <div className="hot-head">
                <h2>Our Hot Dishes</h2>
                <hr />
            </div>
            <div className="hot-title-cards">
                <HotTitleCard
                    setTitle={setTitle}
                    title={title}
                    name="Chicken"
                />
                <HotTitleCard setTitle={setTitle} title={title} name="Curry" />
                <HotTitleCard setTitle={setTitle} title={title} name="Rice" />
                <HotTitleCard setTitle={setTitle} title={title} name="Fish" />
                <HotTitleCard setTitle={setTitle} title={title} name="Fruits" />
                <HotTitleCard
                    setTitle={setTitle}
                    title={title}
                    name="Ice Creams"
                />
                <HotTitleCard
                    setTitle={setTitle}
                    title={title}
                    name="Soft Drinks"
                />
            </div>
            <div className="hot-card">
                {hotDish?.map(data => {
                    return <Card data={data} />;
                })}
            </div>
        </div>
    );
};

export default HotDishes;
