import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="hero-container">
          <div className="info_container">
            <h2>
              Hi, I&apos;m <em>Sean.</em>
            </h2>
            <h3>I am a Front-End Developer</h3>
            <a href="https://github.com/DenverCoder1/readme-typing-svg">
              <img src="https://readme-typing-svg.demolab.com/?lines=Full-stack%20web%20and%20app%20developer;Experienced%20UI%2FUX%20Designer;2%2B%20years%20of%20coding%20experience;Always%20learning%20new%20things&font=Fira%20Code&center=true&width=1200&height=66&color=2929f9&vCenter=true&pause=1000&size=32" />
            </a>
            <Link to="/About">
              <button>About Me</button>
            </Link>
          </div>
          <div className="links-container"></div>
        </div>
        <div className="subhero">
          <img src="/assets/Sean3-3ad21aa2.jpg" alt="Pythonwithsean" />
        </div>
      </div>
    </>
  );
}

export default Hero;
