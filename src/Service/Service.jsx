import React from 'react';
import ServiceCard from "./ServiceCard"
import ServiceData from "./ServiceData"




const Service = () => {
    return (
        <>
            <section className="Service py-5">

                <div className="container">
                    <h1 className="text-center service_title my-5"><span>Our Service</span></h1>
                    <div className="row">
                        {ServiceData.map((val, ind)=>{
                            return(
                                <ServiceCard
                                    icon={val.icon }
                                    title={val.title}
                                    discription={val.discription}
                                    kay={ind}
                                ></ServiceCard>
                            )
                        })}
                       
                    </div>

                </div>
            </section>
        </>
    )
}

export default Service;