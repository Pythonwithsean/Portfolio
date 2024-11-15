import { lazy, Suspense } from "react";
import "../Styles/Home.css";
import { Mail, Linkedin, Github } from "lucide-react";

export default function HomePage() {
  const Languages = lazy(() => import("../Components/Languages"));
  return (
    <div>
      <div className="main">
        <header>
          <img
            src="/images/preview.svg"
            alt="Coffee"
            className="CoffeeSvg"
          ></img>
        </header>
        <section className="Hero">
          <img
            src="/images/AnimePFP.png"
            alt="AnimeBackground"
            className="AnimeBackground"
          ></img>
          <h1>
            Hi I&apos;m{" "}
            <span
              style={{
                color: "#5b2800",
              }}
            >
              Sean
            </span>
          </h1>
          <h2>Software Engineer</h2>
        </section>

        <section className="About">
          <h2>Technical Languages</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <Languages />
          </Suspense>
          <br />
          <h2>About Me</h2>
          <p>
            A second-year scholar and self-taught software engineer with strong
            skills in data structures, algorithms, and building interfaces and
            backend services. Passionate about Golang, Tech.
          </p>
        </section>
        <section className="Work-Experience">
          <h2>Work Experience</h2>
          <h3>Software Engineer @ Kamrah | Present - Aug 2024</h3>
          <p>
            {" "}
            Working on the backend services and building interfaces for the
            company&apos;s product.
          </p>
        </section>
        <section className="Projects">
          <h2>Projects</h2>
          <h3>Image to Ascii Generator</h3>
          <p>Languages - Go</p>

          <h3>Rest API in Go</h3>
          <p>Languages - Go, Docker</p>
        </section>
      </div>
      <footer>
        <h2>Contact</h2>
        <div className="contact-container">
          <a href="mailto:pythonwithsean@gmail.com">
            <Mail />
          </a>
          <a href="https://www.linkedin.com/in/sean-idisi-6bb799262/">
            <Linkedin />
          </a>
          <a href="https://github.com/Pythonwithsean">
            <Github />
          </a>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#5b2800",
              fontSize: "1rem",
              padding: "1rem",
            }}
          >
            © 2024 Created by Sean
          </p>
        </div>
      </footer>
    </div>
  );
}
