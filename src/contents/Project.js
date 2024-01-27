import React, { Component } from "react";
import Projectcard from "../components/Projectcard.js";
import Social from "../components/Social.js";
import QA from "../imgs/QA.png";
import lovedtree from "../imgs/lovedtree.jpg";
import referite from "../imgs/Referite.png";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ["https://github.com/QA-RPG/QA-RPG", "https://github.com/exceed-group07/Loved-Tree", "https://github.com/Referite"]
        };
    }

    handleCardClick(index) {
        window.open(this.state.link[index], "_blank");
    }

    render() {
        const projectCards = [
            {
                title: "QA-RPG",
                role: "Fullstack Developer | Django, TailwindCSS",
                desc: "QA-RPG is a project that has recently released a groundbreaking text-based RPG game. Featuring a unique blend of classic RPG elements and modern technology, this game is sure to be a hit with gamers of all ages.",
                image: QA,
            },
            {
                title: "Loved-Tree",
                role: "Frontend Developer | React",
                desc: "Loved-Tree is a business dedicated to creating innovative products to improve the sustainability of our plant. Our most recent project is the Digital Watering System, designed to reduce water consumption while maximizing plant growth. ",
                image: lovedtree,
            },
            {
                title: "Referite",
                role: "Frontend Developer | React",
                desc: "Referite is an application that primary purpose is to assist the Paris Organizing Committee in efficiently handling event scheduling and documenting medal outcomes. The application features a referee login portal, real-time result tracking, data validation capabilities, and a user-friendly interface for overseeing competition details and country participation.",
                image: referite,
            },
        ];

        return (
            <div className="condiv project">
                <h1 className="subtopic">My Projects</h1>
                {projectCards.map((project, index) => (
                    <div key={index} onClick={() => this.handleCardClick(index)} style={{ cursor: 'pointer' }}>
                        <Projectcard
                            title={project.title}
                            role={project.role}
                            desc={project.desc}
                            image={project.image}
                        />
                    </div>
                ))}
                <Social />
            </div>
        );
    }
}

export default Project;
