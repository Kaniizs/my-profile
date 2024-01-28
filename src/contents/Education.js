import React, { Component } from "react";
import Widecard from "../components/Widecard.js";
import Social from "../components/Social.js";
import RYW from "../imgs/RYW.png";
import KU from "../imgs/KU.jpg";
import "../css/Card.css";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myskills: ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'C++', 'Java', 'SQL', 'Git', 'GitHub', 'Selenium']
        };
    }

    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Rayongwittayakom School" where="Rayong, Thailand" from="2015" to="2021" gpa="3.52" image={RYW} />
                <Widecard title="Kasetsart University" where="Bangkok, Thailand" from="2021" to="Present" gpa="2.86" image={KU} />
                <h1 className="subtopic">My Skills</h1>
                <div className="condiv skills">
                    <ul>
                        {this.state.myskills.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
                <Social />
            </div>
        );
    }
}

export default Education;
