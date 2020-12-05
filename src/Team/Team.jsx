import React from 'react';
import Card from "./Card";
import TeamData from "./TeamData";


const Team = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h1 style={{ color: 'rgb(126, 54, 194)', fontWeight: "bold" }} className="text-center pb-5">
                        <span style={{ borderBottom: "2px solid rgb(126, 54, 194)"}}>Our Team</span></h1>
                <div className="row">
                        
                            {TeamData.map((val, ind) => {
                               return( <Card
                                    img={val.img}
                                    name={val.name}
                                    title={val.title}
                                    discription={val.discription}
                                    key={ind}
                                    id={ind}
                                ></Card>)
                            })}
                      
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team;