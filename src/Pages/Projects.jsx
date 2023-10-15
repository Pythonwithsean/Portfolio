import Header from "../Components/Header";
import projectsData from "./Data/ProjectsData";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="container flex " >
        {projectsData.map((project) => {
          return(
            <div className="card  w-500 border border-white h-500 mt-10" key={project.id} >
              <div className="card-header">
                <h2 className="card-title">{project.title}</h2>
                <h3 className="card-subtitle">{project.subtitle}</h3>
              </div>
              <div className="card-body">
                <img src={project.image} alt={project.title} />
                <p className="card-text">{project.description}</p>
                <div className="card-footer">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Github</button>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Live</button>
                  </a>
                </div>
              </div>
            </div>    
          )
        })}
      </div>
   
    </>
  );
};

export default Projects;
