import Header from "../Components/Header";
import AboutMain from "../Components/AboutMain";
import "../Styles/About.css";
import "../Styles/index.css";

function About() {
  return (
    <>
      <Header />
      <div className="About-Container ">
        <h2 className="heading">
          About Me
        </h2>
        <AboutMain />
      </div>
    </>
  );
}

export default About;
