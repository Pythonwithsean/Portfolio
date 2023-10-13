/* eslint-disable react/no-unescaped-entities */
import { Component, MonitorDot, Store } from "lucide-react";

function AboutMain() {
  const services = ["Web Development", "Web Design", "Digital Marketing"];
  const icons = ["MonitorDot", "Component", "Store"];
  return (
    <div>
      <p className=" text-white p-5 text-sm text-justify">
        I'm a <strong>self-taught</strong> software developer with experience in
        JavaScript, Python, HTML, and CSS. I'm highly motivated and
        detail-oriented, knowledgeable about creating dynamic user interfaces,
        writing maintainable code, and developing responsive web and mobile
        applications. I have strong analytical and problem-solving abilities and
        work well both individually and in a team.
      </p>
      <div className=" text-center flex flex-col">
        <h2 className="font-bold w-full  mt-1 mb-0 ml-auto mr-auto text-center text-lg text-white">
          Tech Stack
        </h2>
        <br />
        <div className="w-full flex align-middle justify-center gap-3 p-1">
          <img
            align="left"
            alt="Java"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <img
            align="left"
            alt="TypeScript"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
          <img
            align="left"
            alt="Git"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <img
            align="left"
            alt="Linux"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          />
          <img
            align="left"
            alt="HTML"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          />
          <img
            align="left"
            alt="CSS"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          />
          <img
            align="left"
            alt="JavaScript"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <img
            align="left"
            alt="React"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            align="left"
            alt="NodeJS"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            align="left"
            alt="Python"
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
          />
          <img
            align="left"
            alt="GitHub"
            width="50px"
            src="https://raw.githubusercontent.com/Pythonwithsean/Pythonwithsean/887a2d7450eafee021dd42c9f31139c240455619/github.svg"
          />
          <img
            align="left"
            alt="Bash"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
          />
          <img
            align="left"
            alt="Svelte"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
          />
          <img
            align="left"
            alt="Django"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          />
          <img
            align="left"
            alt="Adobe XD"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
          />
          <img
            align="left"
            alt="Tailwind CSS"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />

          <br />
        </div>
        <div className="">
          <h2 className="font-bold w-full  mt-9 mb-0 ml-auto mr-auto text-center text-lg text-white">
            My services
          </h2>
          <div
            className="flex justify-between align-middle
           pt-4 gap-4"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className=" w-500 h-280 text-white  font-semibold border-white border border-solid text-left "
              >
                <MonitorDot size={80} color="#b13535" strokeWidth={1.25} />
                <div className="p-1 opacity-70">{service}</div>
                <p className="  text-xs  font-light italic p-1">
                  {services[i] == "Web Development" ? (
                    <p>
                      I Design, Develop and Build Web Applications using the
                      Tech stack above{" "}
                    </p>
                  ) : services[i] == "Web Design" ? (
                    <p> I Design Websites </p>
                  ) : services[i] == "Digital Marketing" ? (
                    <p>I perform Digital Marketing </p>
                  ) : (
                    <p> Does not </p>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
