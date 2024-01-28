import React, { Component } from "react";
import "../css/contact.css";
import Socialbox from "../components/socialbox";

import Social from "../components/Social";

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me !</h1>
                <Socialbox icon="fas fa-phone" info="+66 81 357 7509" />
                <Socialbox icon="fas fa-envelope" info="mojizsz12@gmail.com (Work)" />
                <Socialbox icon="fas fa-envelope" info="lunlaa2014@gmail.com (General)" />
                <Socialbox icon="fab fa-line" info="Meteoriteism" />
                <Socialbox icon="fas fa-map-marker-alt" info="Bangkok, Thailand" />
                <div className="contact-info">
                    {/* <p><i className="fas fa-envelope"></i> : mojizsz12@gmail.com</p>
                    <p><i className="fas fa-phone"></i> : 0813577509</p>
                    <p><i className="fab fa-line"></i> : Meteoriteism</p>
                    <p><i className="fab fa-facebook"></i> : Isaraa Phadungprasertdkul</p> */}
                </div>
                <Social />
            </div>
        );
    }
}

export default Contact;
