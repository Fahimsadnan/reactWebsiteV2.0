import React from 'react';
import img1 from "../img/home_job_banner.jpg"
import "../Delivery/Deliver.css"



const Ask = () => {
    return (
        <>
            <section className="Deliver">
                <div className="container pt-4 pb-2">
                    <div className="row">
                    <div className="col-md-6 order-2 order-lg-1">
                            <img src={img1} alt="Deliver img" className="img-fluid"></img>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2">
                            <h1 className="Deliver_heading" >Ask people to help you </h1>
                            <p className="text-justify pt-md-1 pt-lg-2">This is where Small Gigs come in handy! We accept jobs that help Business owners promote their business (website, app, social media) or help them do something they cannot do by themselves; where they need more people and their knowledge to achieve goals.</p>
                        </div>
                      
                    </div>
                </div>
            </section>
            </>
    )
}

export default Ask;