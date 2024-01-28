import React from "react";

const Skillsbox = () => {
    const myskills = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'C++', 'Java', 'SQL', 'Git', 'GitHub', 'Selenium', 'MongoDB', 'Django'];

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
