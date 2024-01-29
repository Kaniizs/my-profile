import React, { Component } from "react";
import Widecard from "../components/Widecard.js";
import Social from "../components/Social.js";
import RYW from "../imgs/RYW.png";
import KU from "../imgs/KU.jpg";
import "../css/Card.css";

class Education extends Component {

    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Rayongwittayakom School" where="Rayong, Thailand" from="2015" to="2021"  image={RYW} />
                <Widecard title="Kasetsart University" where="Bangkok, Thailand" from="2021" to="Present" image={KU} />
                <Social />
            </div>
        );
    }
}

export default Education;
