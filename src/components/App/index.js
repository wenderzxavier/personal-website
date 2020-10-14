import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../Card";
import "./app.scss";

const App = () => (
  <>
    <main>
      <Card />
    </main>
    <aside className="call-to-scroll">
      <FontAwesomeIcon className="arrow-icon" icon={faArrowsAltV} />
      Scroll me
    </aside>
  </>
);

export default App;
