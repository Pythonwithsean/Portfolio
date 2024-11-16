import "../Styles/Home.css";
import { Mail, Linkedin, Github, Youtube } from "lucide-react";

export default function HomePage() {
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
          <h2>About Me</h2>
          <p>
            A second-year scholar and self-taught software engineer with strong
            skills in data structures, algorithms, and building interfaces and
            backend services. Passionate about Golang, Tech.
          </p>
          <br />
          <h2>Technical Languages</h2>
          <p>
            <strong>Programming Languages:</strong> Go, Python, JavaScript,
            TypeScript, Java, C++, SQL, HTML, CSS
          </p>
          <p>
            <strong>Frameworks:</strong> React, Express, Flask, Django, Spring
            Boot, Svelte, Gin, Echo, GraphQL & Apollo, Next.js, Redux, Jest,
            Cypress
          </p>
          <p>
            <strong>Tools:</strong> Docker, Git, Postman, VS Code, Jira, Figma,
            AWS S3, Firebase, AWS Lambda,
          </p>
        </section>
        <section className="Work-Experience">
          <h2>Work Experience</h2>
          <h3>Software Engineer @ Kamrah | Present - Aug 2024</h3>
          <p>
            {" "}
            Working on the backend services and building interfaces for the
            company&apos;s Internal Tooling.
          </p>
        </section>
        <section className="Projects">
          <h2>Projects</h2>
          <h3>Image to ASCII Generator</h3>
          <p>
            A fun and creative tool built with Go that converts images into
            ASCII art. This project demonstrates my ability to work with image
            processing libraries and handle data manipulation in Go. It includes
            support for customizable output dimensions, grayscale shading, and
            file export options for seamless sharing.
          </p>
          <p>Languages & Tools: Go</p>

          <h3>REST API in Go</h3>
          <p>
            A robust and scalable REST API designed using Go and containerized
            with Docker. This project highlights my expertise in building
            efficient backends, including implementing CRUD operations,
            middleware, and database integrations. With Docker, the API is
            easily portable and ready for deployment across various
            environments.
          </p>
          <p>Languages & Tools: Go, Docker</p>
        </section>
        <section className="Education">
          <h2>Education</h2>
          <h3>
            Computer Science @ University of Kent, Canterbury | 2023 - 2027
          </h3>
          <p>
            Currently pursuing a Bachelor of Science in Computer Science with a
            focus on software engineering and data structures. I have completed
            courses in algorithms, programming languages, and system design,
            furthering my knowledge and skills in the field.
          </p>
        </section>
        <section className="LifeAndBlog">
          <h1>Life & Blog</h1>
          <section>
            <h2>Placed 3rd in Google Hackathon</h2>
            <img src="/images/Googlehackathon.png" alt="Google"></img>
            <p>
              I participated in the Google Hackathon and secured the 3rd place
              with my team. We built a web application that helps users learn
              any African language of their choice. Using Google Cloud
              Speech-to-Text API, we were able to transcribe and translate
              spoken words into the selected language. The project was
              well-received by the judges and attendees, and we were awarded a
              cash prize for our efforts.
            </p>
          </section>
          <section>
            <h2>My Journey to Software Engineering</h2>
            <p>
              I started my journey to software engineering in high school when I
              developed a keen interest in technology and programming. I began
              learning Python and building small projects to enhance my skills.
              As I progressed, I explored other programming languages and
              frameworks, expanding my knowledge and expertise in the field. I
              am now pursuing a degree in Computer Science to further my
              education and career in software engineering.
            </p>

            <h2>My Love for Chess</h2>
            <p>
              Chess has been a significant part of my life since childhood. I
              started playing chess at a young age and quickly fell in love with
              the game. I have participated in various tournaments and
              competitions, honing my skills and strategic thinking. Chess has
              taught me patience, discipline, and critical thinking, which I
              apply to my daily life and work as a software engineer.
            </p>
          </section>
        </section>
      </div>
      <footer>
        <h2>Connect with Me</h2>
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
          <a href="https://youtube.com/@pythonwithsean">
            <Youtube />
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
