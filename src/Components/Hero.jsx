import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="hero-container">
          <br />
          <div className="info_container">
            <h2>
              Hi, I&apos;m <em>Sean.</em>
            </h2>
            <br />
            <h3>I am a Software Engineer</h3>
            <a href="https://github.com/Pythonwithsean">
              {/* Full stack web devloper, 1 year of Coding experience, Always Learning, Experienced with UI/UX Design  */}
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Software Engineer",
                  2000,
                  "Always Learning",
                  2000,
                  "First Year Scholar",
                  2000,
                  "Computer Scientist",
                  2000,
                  "1+ Years of Experience",
                  2000,
                ]}
                speed={75}
                className="moving-text"
                repeat={Infinity}
              />
              {/* <img className="moving-text" src="https://readme-typing-svg.demolab.com/?lines=Full-stack%20web%20and%20app%20developer;Experienced%20UI%2FUX%20Designer;1%20year%20of%20coding%20experience;Always%20learning%20new%20things&font=Fira%20Code&center=true&width=1300px&height=100&color=4ed9ac&vCenter=true&pause=1000&size=25" alt="Moving Text" /> */}
            </a>
            <Link to="/About">
              <button>About Me</button>
            </Link>
          </div>
          <Box
            height={70}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: "" }}
          >
            <Link to="https://github.com/Pythonwithsean">
              <img
                className="Link-img"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
            </Link>
            <Link to="https://www.youtube.com/channel/UCh5L0QwH27DuIfV73l4zEjA">
              <img
                className="Link-img"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                }}
                src="/youtube.png"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/sean-idisi-6bb799262/">
              <img
                className="Link-img"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                }}
                src="/linkedin.png"
              />
            </Link>
          </Box>
        </div>
        {/* <div className="subhero">
          <img src="/assets/Sean3-3ad21aa2.jpg" alt="Pythonwithsean" />
          <img src="../../public/Sean3.jpg" alt="Pythonwithsean" /> 
        </div>  */}
      </div>
    </>
  );
}

export default Hero;
