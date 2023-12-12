import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import DetailProject from "./pages/DetailProject";
import { Component } from "react";
import getProjects from "./utils/project";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getProjects: getProjects(),
    };
  }

  render() {
    return (
      <div className="container mx-auto md:px-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portofolio"
            element={<Project projects={this.state.getProjects} />}
          />
          <Route
            path="/portofolio/:category"
            element={<Project projects={this.state.getProjects} />}
          />
          <Route
            path="/detail/:slug"
            element={<DetailProject projects={this.state.getProjects} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
