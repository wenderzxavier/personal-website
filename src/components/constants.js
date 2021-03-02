import React from "react";
import {
  faBuilding,
  faFileAlt,
  faLaptop,
  faUniversity,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import * as icons from "@icons-pack/react-simple-icons";
import { Overview, AboutMe, Work, Education, Skills } from "./Content";

export const TITLE = "Wender Z. Xavier";
export const SUBHEADER = ".softwareEngineer();";
export const CARD_CONTENT = [
  {
    title: "TL;DR",
    subtitle: "",
    content: Overview(),
    labelIcon: faFileAlt
  },
  {
    title: "About Me",
    subtitle: "",
    content: AboutMe(),
    labelIcon: faUserAlt
  },
  {
    title: "Work",
    subtitle: "",
    content: <Work />,
    labelIcon: faBuilding
  },
  {
    title: "Education",
    subtitle: "CS Degree, MS Informatics",
    content: Education(),
    labelIcon: faUniversity
  },
  {
    title: "Skills",
    subtitle: "Things I worked with",
    content: <Skills />,
    labelIcon: faLaptop
  }
];

export const WORK = [
  {
    company: "ThoughtWorks",
    duration: "May/19 - Present",
    description: `Improved ancillaries products for a massive South America airline company, implementing a micro-frontend and BFF responsible for selecting ancillaries during the ticket purchase flow, increasing conversion rate in more than 30%. During the COVID-19 pandemic, the team entered a state of failure demand, increasing application monitoring, and correcting flow errors, resulting in a 96% success rate in the selection of ancillaries, which contributed to the company's cost reduction.
  
Enhanced quality of legacy code developing unit and end-to-end tests on a global personal care cosmetics group. Currently conducting an assessment to transform the frontend into micro-frontends, which will assist in delivering faster value and a more concise path to production.`,
    techstack: [
      icons.ReactJs,
      icons.Jest,
      icons.Jenkins,
      icons.Sonarqube,
      icons.NodeDotJs,
      icons.Gradle,
      icons.Grafana,
      icons.Rabbitmq,
      icons.Java,
      icons.Spring,
      icons.Cypress,
      icons.Splunk
    ]
  },
  {
    company: "HiveSys",
    duration: "Jun/16 - Present",
    description: `Designed and implemented websites and intelligent software for clients from various industry segments, improving the way companies work and process data. Currently prototyping an innovative business idea for application on the real-estate segment.`,
    techstack: [
      icons.ReactJs,
      icons.Redux,
      icons.NodeDotJs,
      icons.Wordpress,
      icons.Jest,
      icons.Php,
      icons.Sqlite,
      icons.Postgresql,
      icons.Eslint
    ]
  },
  {
    company: "Masters Researcher",
    duration: "Mar/17 - Feb/19",
    description: `Characterize mobility behavior using open datasets from open portals. Designed a platform, (MODAL) using web technologies for mobility analyses and visualization`,
    techstack: [
      icons.ReactJs,
      icons.Javascript,
      icons.Python,
      icons.Pandas,
      icons.Numpy,
      icons.ScikitLearn,
      icons.Openlayers,
      icons.Leaflet,
      icons.Googlemaps
    ]
  }
];

export const SKILLS = [
  {
    title: "Practice Leader",
    icons: [
      { type: icons.ReactJs, color: "#61DAFB" },
      { type: icons.Html5, color: "#E34F26" },
      { type: icons.Css3, color: "#1572B6" },
      { type: icons.Javascript, color: "#F7DF1E" },
      { type: icons.Json, color: "#0769AD" },
      { type: icons.Redux, color: "#764ABC" },
      { type: icons.Reactrouter, color: "#CA4245" },
      { type: icons.StyledComponents, color: "#DB7093" },
      { type: icons.Jest, color: "#C21325" },
      { type: icons.Git, color: "#F05032" }
    ]
  },
  {
    title: "Stretching for Leadership",
    icons: [
      { type: icons.Sass, color: "#CC6699" },
      { type: icons.Typescript, color: "#007ACC" },
      { type: icons.Npm, color: "#CB3837" },
      { type: icons.Jquery, color: "#0769AD" },
      { type: icons.Jsonwebtokens, color: "#0769AD" },
      { type: icons.NodeDotJs, color: "#339933" },
      { type: icons.NextDotJs, color: "#0769AD" },
      { type: icons.Yarn, color: "#2C8EBB" }
    ]
  },
  {
    title: "Can do it",
    icons: [
      { type: icons.Storybook, color: "#FF4785" },
      { type: icons.Sonarlint, color: "#CC2026" },
      { type: icons.Sonarsource, color: "#CB3032" },
      { type: icons.Jenkins, color: "#D24939" },
      { type: icons.Postman, color: "#FF6C37" },
      { type: icons.Jupyter, color: "#F37626" },
      { type: icons.Webpack, color: "#8DD6F9" },
      { type: icons.Grafana, color: "#F46800" },
      { type: icons.Mocha, color: "#8D6748" },
      { type: icons.Googlemaps, color: "#4285F4" },
      { type: icons.Googleanalytics, color: "#E37400" },
      { type: icons.ScikitLearn, color: "#F7931E" },
      { type: icons.Prettier, color: "#F7B93E" },
      { type: icons.Spring, color: "#6DB33F" },
      { type: icons.Latex, color: "#008080" },
      { type: icons.Gradle, color: "#02303A" },
      { type: icons.Numpy, color: "#013243" },
      { type: icons.Firebase, color: "#FFCA28" },
      { type: icons.Java, color: "#007396" },
      { type: icons.Sqlite, color: "#003B57" },
      { type: icons.MaterialUi, color: "#0081CB" },
      { type: icons.Sonarqube, color: "#4E9BCD" },
      { type: icons.Postgresql, color: "#336791" },
      { type: icons.Mysql, color: "#4479A1" },
      { type: icons.Graphql, color: "#E10098" },
      { type: icons.Python, color: "#3776AB" },
      { type: icons.Eslint, color: "#4B32C3" },
      { type: icons.Pandas, color: "#150458" },
      { type: icons.Bootstrap, color: "#563D7C" },
      { type: icons.Cypress, color: "#17202C" },
      { type: icons.Splunk, color: "#0769AD" },
      { type: icons.Leaflet, color: "#199900" }
    ]
  },
  {
    title: "Practiced Some",
    icons: [
      { type: icons.Angular, color: "#DD0031" },
      { type: icons.Webgl, color: "#990000" },
      { type: icons.Rabbitmq, color: "#FF6600" },
      { type: icons.D3DotJs, color: "#F9A03C" },
      { type: icons.Githubactions, color: "#2088FF" },
      { type: icons.Babel, color: "#F9DC3E" },
      { type: icons.Openstreetmap, color: "#7EBC6F" },
      { type: icons.Mongodb, color: "#47A248" },
      { type: icons.Netlify, color: "#00C7B7" },
      { type: icons.Openlayers, color: "#1F6B75" },
      { type: icons.Docker, color: "#2496ED" },
      { type: icons.Kubernetes, color: "#326CE5" },
      { type: icons.Apollographql, color: "#311C87" },
      { type: icons.Googlecloud, color: "#4285F4" },
      { type: icons.Dynatrace, color: "#1496FF" },
      { type: icons.Php, color: "#777BB4" },
      { type: icons.Wordpress, color: "#21759B" }
    ]
  },
  {
    title: "Want to Learn",
    icons: [
      { type: icons.Nestjs, color: "#E0234E" },
      { type: icons.Redhat, color: "#EE0000" },
      { type: icons.RollupDotJs, color: "#EC4A3F" },
      { type: icons.Redis, color: "#DC382D" },
      { type: icons.Reactivex, color: "#B7178C" },
      { type: icons.EmberDotJs, color: "#E04E39" },
      { type: icons.Postcss, color: "#DD3A0A" },
      { type: icons.Svelte, color: "#FF3E00" },
      { type: icons.Tensorflow, color: "#FF6F00" },
      { type: icons.VueDotJs, color: "#4FC08D" },
      { type: icons.NuxtDotJs, color: "#00C58E" },
      { type: icons.Electron, color: "#47848F" },
      { type: icons.Go, color: "#00ADD8" },
      { type: icons.NeoFourJ, color: "#008CC1" },
      { type: icons.Kotlin, color: "#0095D5" },
      { type: icons.Flutter, color: "#02569B" },
      { type: icons.Terraform, color: "#623CE4" },
      { type: icons.Haskell, color: "#5D4F85" }
    ]
  }
];
