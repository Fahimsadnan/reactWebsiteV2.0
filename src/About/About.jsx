import React from 'react';
import AboutWeb from "../img/About.svg"
import "./About.css"


const About = () => {
    return (
        <>
            <section className="About py-md-3 py-0 ">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center my-5"><span className="about_hedline">About Us</span></h1>
                        <div className="col-md-6">
                            <img src={AboutWeb} alt="About Img" className="img-fluid"></img>
                        </div>
                        <div className="col-md-6 about_discription my-5 mt-md-0">
                            <h1>Few line About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit ipsa tempore dolor quod tenetur facilis consequatur ratione aut voluptates quos, sapiente labore molestiae veritatis sed blanditiis magni illo molestias. Maxime, natus sint ipsam voluptas molestiae eos incidunt unde obcaecati, earum quas illum nostrum vitae itaque dignissimos adipisci cum? Culpa dolore velit veritatis hic dolorem facere rem mollitia est odit tenetur iure, repudiandae quibusdam et iusto nostrum, obcaecati laudantium minima repellat ipsa! Quos blanditiis explicabo vel vitae adipisci fuga, ea voluptate repudiandae amet. Culpa unde sunt dicta, neque mollitia at aut suscipit nemo adipisci, earum deserunt recusandae voluptatum a distinctio.</p>
                            <div className="text-center my-md-5 my-4">
                                <a href="#">Get More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default About;