import Header from "../Components/Header";
import AboutMain from "../Components/AboutMain";
import "../Styles/About.css";
import "../Styles/index.css";

function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col  w-1200 ml-auto mr-auto mt-4 ">
        <h2 className=" font-bold w-full  mt-5 mb-0 ml-auto mr-auto text-center text-lg text-white">
          About Me
        </h2>
        <AboutMain />
      </div>
    </>
  );
}

export default About;
