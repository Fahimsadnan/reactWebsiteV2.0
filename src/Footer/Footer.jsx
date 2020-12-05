import React from 'react';

const year = new Date().getFullYear()
const Footer = () => {

    return (
        <>
            <section>
                <div className="container text-center py-5">
                    <div className="row">
                        <div className="col pt-3">
                            <p>All copyright &#169; reserved { year}  By <strong>Fahim Sadnan</strong> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;