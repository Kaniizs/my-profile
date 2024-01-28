import React from "react";

const Skillsbox = () => {
    const myskills = ['Python', 'JavaScript/TypeScript', 'Java', 'C++', 'React', 'Node.js', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Git', 'GitHub', 'Vercel', 'Scrum', 'Agile'];

    return (
        <div className="condiv skills">
            <ul>
                {myskills.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skillsbox;
