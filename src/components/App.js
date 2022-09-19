import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { getMenu, getIdentity } from "../utils/data";
import Home from "./pages/Home";
import Footer from "./Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import getSkillIcon from "../utils/skill";
import getPortfolios from "../utils/portfolio";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: getMenu(),
      identity: getIdentity(),
      getSkills: getSkillIcon(),
      portfolios: getPortfolios(),
    };
  }

  render() {
    return (
      <div className="transition duration-200 dark:bg-slate-800 min-h-screen">
        <Navbar menus={this.state.menus} />
        <Routes>
          <Route path="/" element={<Home identity={this.state.identity} />} />
          <Route
            path="home"
            element={<Home identity={this.state.identity} />}
          />
          <Route
            path="skills"
            element={<Skills getSkills={this.state.getSkills} />}
          />
          <Route
            path="projects"
            element={<Projects portfolios={this.state.portfolios} />}
          />
          <Route
            path="contact"
            element={<Contact identity={this.state.identity} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
