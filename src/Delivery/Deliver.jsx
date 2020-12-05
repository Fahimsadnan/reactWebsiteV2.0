import React from 'react';
import img1 from "../img/home_work_banner.jpg"
import "./Deliver.css"


const Deliver = () => {
    return (
        <>
            <section className="Deliver">
                <div className="container pt-4 pb-2">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-1">
                            <h1 className="Deliver_heading" >Deliver work and get paid</h1>
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

export default Deliver;