import React from 'react';
import "./Contact.css"


const Contact = () => {

    const onSub = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1 className="text-center my-5"
                    
                        style={{
                            fontWeight: "bold",
                            color: "rgb(126, 54, 194)",
                            
                        }}
                    
                    > <span
                    style={{borderBottom : "2px solid rgb(126, 54, 194)"}}
                        >Contact Us</span></h1>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-lg-3 offset-md-2 offset-lg-2">

                            <form onSubmit={onSub}>


                                <div className="form-group my-3">
                                    <label for="exampleInputEmail1">Enter Your First Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group my-3">
                                    <label for="exampleInputEmail1">Enter Your Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" />
                                </div>


                                <div className="form-group my-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group my-3">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="form-group my-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;