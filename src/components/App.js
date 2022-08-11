import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { getMenu } from "../utils/data";
import Home from "./pages/Home";
import Footer from "./Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: getMenu(),
    };
  }

  render() {
    return (
      <div className="transition duration-200 dark:bg-slate-800 min-h-screen">
        <Navbar menus={this.state.menus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
