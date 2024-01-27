import React, { Component } from "react";
import profile from "../imgs/me2.jpg";
import Social from "../components/Social";
import "../css/about.css";

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <div className="content">
                    <img src={profile} alt="prof" className="profilepic" />
                    <div className="text">
                        Hello, I'm Kawgong. I am a student of software and knowledge engineering at Kasetsart University. I'm interested in web development and frontend development.
                        I am looking for any experience. I'm eager to learn new things and a quick learner.
                        
                        <div className="text2">Favorite Quotes: Nothing is impossible.</div>
                    </div>

                </div>
                <Social />
            </div>
        );
    }
}

export default About;
