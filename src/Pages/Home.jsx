import { Mail, Linkedin, Github, Youtube } from "lucide-react";
import "../Styles/Home.css";

export default function HomePage() {
  return (
    <div className="dark-theme">
      <section className="hero">
      <h1>Pythonwithsean</h1>
      <h4>-- Software Enginer --</h4>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          A second-year scholar and self-taught software engineer with strong
          skills in data structures, algorithms, and full-stack development, 
          Aspiring to become the best software engineer in the world. 
        </p>         
      </section>

        <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Languages</h3>
            <p>Go, Python, JavaScript, TypeScript, Java, C++, SQL, HTML, CSS</p>
          </div>
          <div>
            <h3>Frameworks</h3>
            <p> React, Express, Flask, Django, Spring Boot, Svelte, Gin, Echo, GraphQL & Apollo, Next.js, Redux, Jest, Cypress</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Experiences</h2>
        <br/>
        <h3>Incoming Software Engineer @ Google</h3>
        <p>Building Services with C++ and TypeScript </p>
        <br/>
        <h3>Software Engineer @ Kamrah</h3>
        <p>Building backend services and internal tooling interfaces.</p>
      </section>


      <section className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Image to ASCII Generator</h3>
          <p>Go-based tool converting images to ASCII art.</p>
        </div> 
      </section>


      <footer className="footer">
        <div className="contact-links">
          <a href="mailto:pythonwithsean@gmail.com"><Mail /></a>
          <a href="https://linkedin.com/in/sean-idisi"><Linkedin /></a>
          <a href="https://github.com/Pythonwithsean"><Github /></a>
          <a href="https://youtube.com/@pythonwithsean"><Youtube /></a>
        </div>
        <p>© 2024 Sean. All rights reserved.</p>
      </footer>
    </div>
  );
}
