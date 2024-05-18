import Header from "../Components/Header";
import AboutMain from "../Components/AboutMain";
import "../Styles/About.css";
import "../Styles/index.css";
import { Container, Box } from "@mui/material";
// 
function About() {
  return (
    <>

      <Header />
      <Container>
        <h2 className="heading">
          About Me
        </h2>
        <Box component="section" sx={{ p: 2 }}>
      <p className="paragraph">A First Year Scholar and a self-taught Software Engineer, keen on results and I
        have a very good understanding of Data Structures and Algorithms and love making
        interfaces and Backend Services. I Love Golang and its concurrency and it is my
        favourite language. I make Youtube Videos about Tech on My channel CodershubUk_
        and I love Programming and Learning more About Vim and the Linux Terminal.</p>
      </Box>
        <AboutMain />
        </Container>
    </>
  );
}

export default About;
