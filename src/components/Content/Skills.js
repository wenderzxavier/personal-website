import React from "react";
import { SKILLS } from "../constants";

const Skills = () => (
  <>
    <p>
      These are some languages/frameworks/tools that I have on my radar as a
      software engineer.
    </p>
    <ul>
      {SKILLS.map((skill, index) => (
        <li key={index}>
          {skill.title}
          <div>
            {skill.icons.map((icon, iconIndex) => (
              <icon.type
                color={icon.color}
                className="skills-icons"
                key={iconIndex}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  </>
);
export default Skills;
