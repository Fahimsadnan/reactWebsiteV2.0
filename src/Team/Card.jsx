import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import "./Card.css"

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 my-2">
            <div className="card text-center">
            <div className="card_img my-4">
                <img src={props.img} className="card-img-top img-fluid" alt="img" />
            </div>
            <div className="card-body">
                <h3>{ props.name}</h3>
                <p className="stage"><i>{props.title}</i></p>
                        <p className="card-text">{props.discription}</p>
                        <Button className="btn-contact mx-2" ><CallIcon></CallIcon></Button>
                        <Button className="btn-contact mx-2" ><FacebookIcon></FacebookIcon></Button>
                        <Button className="btn-contact mx-2" ><WhatsAppIcon></WhatsAppIcon></Button>
                        
                        
            </div>
                </div>
                </div>
        </>
    )
}
export default Card;
