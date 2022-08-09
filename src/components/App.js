import React, { Component } from "react";
import Navbar from "./Navbar";
import { getMenu } from "../utils/data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: getMenu(),
    };
  }

  render() {
    return (
      <div className="transition duration-200 dark:bg-slate-800">
        <Navbar menus={this.state.menus} />
      </div>
    );
  }
}

export default App;
