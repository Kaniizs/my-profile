import React, { Component } from "react";
import "../css/contact.css";

import Social from "../components/Social";

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me !</h1>
                <div className="contact-info">
                    <p><i className="fas fa-envelope"></i> Email : mojizsz12@gmail.com</p>
                    <p><i className="fas fa-phone"></i> Phone : 0813577509</p>
                    <p><i className="fab fa-line"></i> Line : Meteoriteism</p>
                    <p><i className="fab fa-facebook"></i> Facebook : Isaraa Phadungprasertdkul</p>
                </div>
                <Social />
            </div>
        );
    }
}

export default Contact;
