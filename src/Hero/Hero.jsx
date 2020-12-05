import React from 'react';
import "./Hero.css"
import web from "../img/home_work.gif"

const Hero = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 col-lg pt-5 pt-lg-5 mt-md-5 mt-lg-0 order-2 order-lg-1">
                    <div className="my-lg-4 my-md-0 pt-md-0 pt-lg-1 hero_description">
                        <h1 className="mt-lg-5 mt-md-2 pt-md-2 pt-lg-5">Grow Up Your Business with <strong className="text-primary">Fahim Sadnan</strong></h1>
                        <h2 className="hero_description1 pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio.</h2>
                    </div>
                    <div className="pt-lg-3 pt-md-3 btn_hero">
                        <a href="#" className="hero_btn mt-md-2 mt-lg-5">Get More Info</a>
                        </div>
                </div>
                <div className="col-md-6 col-lg pt-5 pt-lg-5 order-1 order-lg-2">
                    <div className="my-lg-5 hero_img_div">
                        <img src={web} alt="Hero Img" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;