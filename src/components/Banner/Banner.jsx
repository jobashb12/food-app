import React from "react";
import Delivery from "../../assets/image/delivery.png";
import HeroBg from "../../assets/image/heroBg.png";
import { heroCard } from "../../Data";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="left">
                <div className="bike-deliver">
                    <h4>Bike Delivery</h4>
                    <div className="bike-circle">
                        <img src={Delivery} alt="delivery" />
                    </div>
                </div>
                <h1 className="banner-heading">
                    The Fastest Delivery in <span>Your City</span>
                </h1>
                <p className="banner-paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minima velit eaque fugit distinctio est nam voluptatum
                    architecto, porro iusto deserunt recusandae ipsa minus eos
                    sunt, dolores illo repellat facere suscipit!
                </p>
                <button className="banner-btn">Order Now</button>
            </div>
            <div className="right">
                <div className="hero-img">
                    <img src={HeroBg} alt="HeroBg" />
                </div>
                <div className="hero-cards">
                    {heroCard.map(data => {
                        return (
                            <div className="hero-card" key={data.id}>
                                <div className="hero-card-img">
                                    <img src={data.img} alt="I1" />
                                </div>
                                <h4 className="hero-card-heading">
                                    {data.name}
                                </h4>
                                <p className="hero-card-para">{data.title}</p>
                                <p className="hero-card-price">
                                    $ <span>{data.price}</span>
                                </p>
                            </div>
                        );
                    })}
                    {/* <div className="hero-card">
                        <div className="hero-card-img">
                            <img src={F1} alt="I1" />
                        </div>
                        <h4 className="hero-card-heading">Icecream</h4>
                        <p className="hero-card-para">Chocolate & vanilla</p>
                        <p className="hero-card-price">
                            $ <span>5.25</span>
                        </p>
                    </div>
                    <div className="hero-card">
                        <div className="hero-card-img">
                            <img src={C3} alt="I1" />
                        </div>
                        <h4 className="hero-card-heading">Icecream</h4>
                        <p className="hero-card-para">Chocolate & vanilla</p>
                        <p className="hero-card-price">
                            $ <span>5.25</span>
                        </p>
                    </div>
                    <div className="hero-card">
                        <div className="hero-card-img">
                            <img src={Fi1} alt="I1" />
                        </div>
                        <h4 className="hero-card-heading">Icecream</h4>
                        <p className="hero-card-para">Chocolate & vanilla</p>
                        <p className="hero-card-price">
                            $ <span>5.25</span>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
