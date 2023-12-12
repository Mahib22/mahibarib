import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

export default function Project({ projects, categories }) {
  let { category } = useParams();
  let filteredProject;

  if (category) {
    filteredProject = projects.filter((project) => {
      return project.category === category;
    });
  } else {
    filteredProject = projects;
  }

  let sortedData = filteredProject.sort((a, b) => b.id - a.id);

  return (
    <>
      <Navbar />
      <div className="py-4">
        <Category {...categories} />

        <div className="flex flex-wrap -mx-4 my-4">
          {sortedData.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
