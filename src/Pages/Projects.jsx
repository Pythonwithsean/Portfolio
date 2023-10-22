import Header from "../Components/Header";
import projectsData from "./Data/ProjectsData";
import "../Styles/Projects.css"

const Projects = () => {
  return (
    <>
      <Header />
      <div className="Projects-container">
        {projectsData.map((project) => {
          return (
            <div className="card  " key={project.id}>
              <div className="card-header  text-black">
                <h2 className="card-title  text-black">{project.name}</h2>
                <h3 className="card-subtitle  text-black">{project.language}</h3>
              </div>
              <br />
              <div className="card-body color-white" key={project.id}>
                <img src={project.image} alt={project.name} />
                <p className="card-tex color-white p-3 text-white">{project.description}</p>
                <div className="card-footer  text-white">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary  text-white">Link</button>
                  </a>
                  {/* You need to define a 'project.live' property in your data if you want to use it */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
