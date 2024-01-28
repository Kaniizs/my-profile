import React, { Component } from "react";
import "../css/contact.css";
import Socialbox from "../components/socialbox";

import Social from "../components/Social";

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me !</h1>
                <h2 className="desc">You can search for my social or click the icon below !</h2>
                <Socialbox icon="fas fa-phone" info="+66 81 357 7509" />
                <Socialbox icon="fas fa-envelope" info="mojizsz12@gmail.com (Work)" />
                <Socialbox icon="fas fa-envelope" info="lunlaa2014@gmail.com (General)" />
                <Socialbox icon="fab fa-line" info="Meteoriteism" />
                <Socialbox icon="fas fa-map-marker-alt" info="Bangkok, Thailand" />
                <Social />
            </div>
        );
    }
}

export default Contact;
