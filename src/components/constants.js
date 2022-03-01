import React from "react";
import {
  faBuilding,
  faFileAlt,
  faLaptop,
  faUniversity,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  Angular,
  Apollographql,
  Babel,
  Bootstrap,
  Css3,
  Cypress,
  D3DotJs,
  Docker,
  Dynatrace,
  Electron,
  EmberDotJs,
  Eslint,
  Firebase,
  Flutter,
  Git,
  Githubactions,
  Go,
  Googleanalytics,
  Googlecloud,
  Googlemaps,
  Gradle,
  Grafana,
  Graphql,
  Haskell,
  Html5,
  Java,
  Javascript,
  Jenkins,
  Jest,
  Jquery,
  Json,
  Jsonwebtokens,
  Jupyter,
  Kotlin,
  Kubernetes,
  Latex,
  Leaflet,
  MaterialUi,
  Mocha,
  Mongodb,
  Mysql,
  NeoFourJ,
  Nestjs,
  Netlify,
  NextDotJs,
  NodeDotJs,
  Npm,
  Numpy,
  NuxtDotJs,
  Openlayers,
  Openstreetmap,
  Pandas,
  Php,
  Postcss,
  Postgresql,
  Postman,
  Prettier,
  Python,
  Rabbitmq,
  Reactivex,
  ReactJs,
  Reactrouter,
  Redhat,
  Redis,
  Redux,
  RollupDotJs,
  Sass,
  ScikitLearn,
  Sonarlint,
  Sonarqube,
  Sonarsource,
  Splunk,
  Spring,
  Sqlite,
  Storybook,
  StyledComponents,
  Svelte,
  Tensorflow,
  Terraform,
  Typescript,
  VueDotJs,
  Webgl,
  Webpack,
  Wordpress,
  Yarn
} from "@icons-pack/react-simple-icons";
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
    description: `Improved ancillaries products for a massive South America airline company, implementing a micro-frontend and BFF responsible for selecting ancillaries during the ticket purchase flow, increasing conversion rate in more than 30%.

Enhanced quality of legacy code developing unit and end-to-end tests on a global personal care cosmetics group. Currently conducting an assessment to transform the frontend into micro-frontends, which will assist in delivering faster value and a more concise path to production.

Working for a Los Angeles-based startup with a mission to make the process of paying bills easier. Frontend reference in the team. Currently working on new features and refactoring the project to apply a robust design system.
    `,
    techstack: [
      ReactJs,
      Jest,
      Jenkins,
      Sonarqube,
      NodeDotJs,
      Typescript,
      Gradle,
      Php,
      Grafana,
      Rabbitmq,
      Java,
      Spring,
      Cypress,
      Splunk
    ]
  },
  {
    company: "HiveSys",
    duration: "Jun/16 - Jan/21",
    description: `Designed and implemented websites and intelligent software for clients from various industry segments, improving the way companies work and process data.`,
    techstack: [
      ReactJs,
      Redux,
      NodeDotJs,
      Wordpress,
      Jest,
      Php,
      Sqlite,
      Postgresql,
      Eslint
    ]
  },
  {
    company: "Masters Researcher",
    duration: "Mar/17 - Feb/19",
    description: `Characterize mobility behavior using open datasets from open portals. Designed a platform, (MODAL) using web technologies for mobility analyses and visualization`,
    techstack: [
      ReactJs,
      Javascript,
      Python,
      Pandas,
      Numpy,
      ScikitLearn,
      Openlayers,
      Leaflet,
      Googlemaps
    ]
  }
];

export const SKILLS = [
  {
    title: "Practice Leader",
    icons: [
      { type: ReactJs, color: "#61DAFB" },
      { type: Html5, color: "#E34F26" },
      { type: Css3, color: "#1572B6" },
      { type: Javascript, color: "#F7DF1E" },
      { type: Json, color: "#0769AD" },
      { type: Jest, color: "#C21325" },
      { type: Typescript, color: "#007ACC" },
      { type: Redux, color: "#764ABC" },
      { type: StyledComponents, color: "#DB7093" }
    ]
  },
  {
    title: "Stretching for Leadership",
    icons: [
      { type: Reactrouter, color: "#CA4245" },
      { type: Sass, color: "#CC6699" },
      { type: Npm, color: "#CB3837" },
      { type: Webpack, color: "#8DD6F9" },
      { type: Git, color: "#F05032" },
      { type: Jquery, color: "#0769AD" },
      { type: Jsonwebtokens, color: "#0769AD" }
    ]
  },
  {
    title: "Can do it",
    icons: [
      { type: Storybook, color: "#FF4785" },
      { type: Sonarlint, color: "#CC2026" },
      { type: Sonarsource, color: "#CB3032" },
      { type: Jenkins, color: "#D24939" },
      { type: Postman, color: "#FF6C37" },
      { type: Jupyter, color: "#F37626" },
      { type: Grafana, color: "#F46800" },
      { type: Mocha, color: "#8D6748" },
      { type: Googlemaps, color: "#4285F4" },
      { type: Googleanalytics, color: "#E37400" },
      { type: ScikitLearn, color: "#F7931E" },
      { type: Prettier, color: "#F7B93E" },
      { type: Spring, color: "#6DB33F" },
      { type: NodeDotJs, color: "#339933" },
      { type: Latex, color: "#008080" },
      { type: Gradle, color: "#02303A" },
      { type: Numpy, color: "#013243" },
      { type: Firebase, color: "#FFCA28" },
      { type: NextDotJs, color: "#0769AD" },
      { type: Java, color: "#007396" },
      { type: Yarn, color: "#2C8EBB" },
      { type: Sqlite, color: "#003B57" },
      { type: MaterialUi, color: "#0081CB" },
      { type: Sonarqube, color: "#4E9BCD" },
      { type: Postgresql, color: "#336791" },
      { type: Mysql, color: "#4479A1" },
      { type: Graphql, color: "#E10098" },
      { type: Python, color: "#3776AB" },
      { type: Svelte, color: "#FF3E00" },
      { type: Eslint, color: "#4B32C3" },
      { type: Pandas, color: "#150458" },
      { type: Netlify, color: "#00C7B7" },
      { type: Bootstrap, color: "#563D7C" },
      { type: Cypress, color: "#17202C" },
      { type: Docker, color: "#2496ED" },
      { type: Apollographql, color: "#311C87" },
      { type: Php, color: "#777BB4" },
      { type: Kubernetes, color: "#326CE5" },
      { type: Splunk, color: "#0769AD" }
    ]
  },
  {
    title: "Practiced Some",
    icons: [
      { type: Angular, color: "#DD0031" },
      { type: Webgl, color: "#990000" },
      { type: Rabbitmq, color: "#FF6600" },
      { type: D3DotJs, color: "#F9A03C" },
      { type: RollupDotJs, color: "#EC4A3F" },
      { type: Githubactions, color: "#2088FF" },
      { type: Babel, color: "#F9DC3E" },
      { type: Openstreetmap, color: "#7EBC6F" },
      { type: Leaflet, color: "#199900" },
      { type: Mongodb, color: "#47A248" },
      { type: Openlayers, color: "#1F6B75" },
      { type: Googlecloud, color: "#4285F4" },
      { type: Dynatrace, color: "#1496FF" },
      { type: Wordpress, color: "#21759B" }
    ]
  },
  {
    title: "Want to Learn",
    icons: [
      { type: Nestjs, color: "#E0234E" },
      { type: Redhat, color: "#EE0000" },
      { type: Redis, color: "#DC382D" },
      { type: Reactivex, color: "#B7178C" },
      { type: EmberDotJs, color: "#E04E39" },
      { type: Postcss, color: "#DD3A0A" },
      { type: Tensorflow, color: "#FF6F00" },
      { type: VueDotJs, color: "#4FC08D" },
      { type: NuxtDotJs, color: "#00C58E" },
      { type: Electron, color: "#47848F" },
      { type: Go, color: "#00ADD8" },
      { type: NeoFourJ, color: "#008CC1" },
      { type: Kotlin, color: "#0095D5" },
      { type: Flutter, color: "#02569B" },
      { type: Terraform, color: "#623CE4" },
      { type: Haskell, color: "#5D4F85" }
    ]
  }
];
