import Header from "../Components/Header";
import projectsData from "./Data/ProjectsData";
import "../Styles/Projects.css"

const Projects = () => {
  return (
    <>
      <Header />
      <br />
      <h2 className="heading">Projects and Contributions</h2>
      <p className="section">

Web and Mobile Applications: Ive developed a variety of web and mobile applications, ranging from personal projects to client work, demonstrating my ability to build user-friendly interfaces and deliver software solutions that meet user needs.

Open Source Contributions: I actively participate in open-source projects, contributing code and collaborating with the developer community to improve and extend the functionality of widely used tools and libraries.

Technical Blogging: I maintain a technical blog where I share my insights, experiences, and tutorials related to software development, helping others in the community and showcasing my communication skills.

Hackathons and Coding Challenges: I regularly participate in coding challenges and hackathons to continuously sharpen my problem-solving skills and stay updated with the latest trends in the tech industry.

I am passionate about software development, always eager to learn, and committed to staying up-to-date with the ever-evolving tech landscape. My dedication to quality, attention to detail, and ability to adapt to new technologies make me a valuable asset to any project or team. My portfolio is a testament to my continuous growth and commitment to excellence in the field of software development.</p>
     
      <div className="Projects-container">
        
        {projectsData.map((project) => {
          return (
            <div className="card  " key={project.id}>
              <div className="card-header ">
                <h2 className="card-title  heading">{project.name}</h2>
                <h3 className="card-subtitle  languages">{project.language}</h3>
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
