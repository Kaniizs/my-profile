import React, { Component } from "react";
import Social from "../components/Social";
import profile from "../imgs/prof.jpg";
import ReactTypingEffect from "react-typing-effect";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div className="welcome-message">
            Welcome to My Website !
        </div>
        <img src={profile} alt="prof" className="profilepic"></img>
        <ReactTypingEffect text={['Hello World!', 'I am Kawgong', 'A passionate developer who is willing to find any experience.']} speed={75} className="typingeffect" />
        <Social />
      </div>
    );
  }
}

export default Home;
