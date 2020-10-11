import React from "react";
import { WORK } from "../constants";

const Work = () => (
  <ul>
    {WORK.map((position, index) => (
      <li key={index} className="bold">
        {position.company}
        <br />
        {position.duration}
        <p>{position.description}</p>
        <p>Tech stack:</p>
        <div className="tech-stack">
          {position.techstack.map((Icon, skillIdx) => (
            <Icon key={skillIdx} />
          ))}
        </div>
      </li>
    ))}
  </ul>
);

export default Work;
