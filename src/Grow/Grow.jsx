import React from 'react';
import img1 from "../img/Grow.svg"
import "../Delivery/Deliver.css"


const Grow = () => {
    return (
        <>
            <section className="Deliver py-5">
                <div className="container pt-4 pb-2">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-1">
                            <h1 className="Deliver_heading" >Growup Your Business</h1>
                            <p className="text-justify pt-md-1 pt-lg-2">This is how Small Gigs are great work! They are easy to do and require little time to finish. There are jobs like take a survey, categorize images, help promote content and many others. Get credited immediately after task is reviewed and don’t wait a month or more for a pay out.</p>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2">
                            <img src={img1} alt="Deliver img" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default Grow;