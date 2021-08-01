import React from "react";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

function Routers(props) {
  return (
    <>
      <Main />
      <Switch>
        <Route path="/" exact>
          <Projects />
        </Route>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
      </Switch>
    </>
  );
}

export default Routers;
