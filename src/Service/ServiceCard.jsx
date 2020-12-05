import React from 'react';
import "./Service.css"


const ServiceCard = (props) => {
    return (
        <>
                  <div className="col-md-4 my-2">
                            <div className="card text-center">
                                <div className="card-body">
                                  {props.icon}
                        <h2><i>{ props.title}</i></h2>
                        <p>{ props.discription}</p>
                                </div>
                            </div>
                        </div>
            </>
    )
}

export default ServiceCard;