import React, { Component } from "react";
import Navbar from "./Navbar";
import { getMenu } from "../utils/data";
import Home from "./pages/Home";
import Footer from "./Footer";

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
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
