/* eslint-disable react/no-unescaped-entities */
import { Component, MonitorDot, Store } from "lucide-react";

function AboutMain() {
  const services = ["Web Development", "Web Design", "Digital Marketing"];

  return (
    <div>
      <p className=" text-white p-8 text-lg text-justify font-light">
        I'm a <strong>self-taught</strong> software developer with experience in
        JavaScript, Python, HTML, and CSS and React. I'm highly motivated and
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
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <img
            align="left"
            alt="TypeScript"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          />
          <img
            align="left"
            alt="Git"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <img
            align="left"
            alt="Linux"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          />
          <img
            align="left"
            alt="HTML"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          />
          <img
            align="left"
            alt="CSS"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          />
          <img
            align="left"
            alt="JavaScript"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          />
          <img
            align="left"
            alt="React"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            align="left"
            alt="NodeJS"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            align="left"
            alt="Python"
            width="50px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
          />
          <img
            align="left"
            alt="GitHub"
            width="50px"
            className="tech-stack-logo"
            src="https://raw.githubusercontent.com/Pythonwithsean/Pythonwithsean/887a2d7450eafee021dd42c9f31139c240455619/github.svg"
          />
          <img
            align="left"
            alt="Bash"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
          />
          <img
            align="left"
            alt="Svelte"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
          />
          <img
            align="left"
            alt="Django"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          />
          <img
            align="left"
            alt="Adobe XD"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
          />
          <img
            align="left"
            alt="Tailwind CSS"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />

          <img
            align="left"
            alt="Tailwind CSS"
            width="30px"
            className="tech-stack-logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <img
            align="left"
            alt="Tailwind CSS"
            width="50px"
            className="tech-stack-logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nNWaW4hNURjHfzOMa0wYRPJiPJjw4BoRL9MYHtCYCE2ivIxQbilNGA+jeXJ/QbmXhOSWFOWSxohSFIbcZ3KbMnKZMUdL36nV6ezL2mvvc/b519c0Z6/v2/u397p869sbotUG4BPwDagF8shBLQISKbaCHFN/oDkNyGuggBzSoTQQSasiRzQD6HQBeQrkE3N1B564QCStgpir1uHCdwLbtP8fEGONBn47gIyQQf5K+20WMVQ+cNsB4rO2flRrv98lhqp2GQ+XUsbQe+3YdGKkIbJyO4HUpLRfrx27Qox01mOGKktp31vSluTxCcRAczwg1HoyII1fjdbmDFlWX+CtB8gzB99CoFWDVTNe1rTXx8J3zMW/Tmt3hCxpEtDhA2SVS4xBwA9pp2IVk2F1BR76gEgIsJt2a233k2Ft8QnxS9YNNw3TsgHVfmiGGBgJ/PQJcs9nzIOaTz0ZkEozrvuEULbLZ1yVh7WLTxtQFDEHyw0glC0xiH1S89saIcP/u6Svxn7MZBYqAf6KX6usM5HohCHElwAVk/Oa/8YoIMoMIZRdDnCecdoWWRUueoYJ0QtoCgAStJ9f02KorUFoqg8AoazconCREHsDdAsDYizwJwBEp+UUekuLtcwWogvQGPBpPLc8d3lKLHUtgbUuIISy49jrvhavMmiQ4cB3C5DVIYBUaPEeBS1+X7CAUDY5BJA84LEWc7ZpgPmWECqT7UE4WqrFvWPqfMASpIFw9z1NWuyZJs7zLEH2EK5WarHVYmmk0xYgqjuEqQJ5p5KMP8XEucjhJY0fUxuvsLVWi3/O1HluAIggGa/ffK/FpnR0yhDkKtFph3aew6bOqkL40QBkezQMFEqXskqBTLqYKp+GoTzZm2wGbqZJXAM/+aM+QQZaXLyaYBZLxdFtolHryqigJ+kHvPOAUCcwkcpop0p3bND264k09hLYJ0/cen9S6vGmVu3pvTRYMln1hL+6xGqXt1+bgPFEIL2QlmprHFKMaVKsbvS4Ec0CWBllBSWpwpRVNpEmOy2WwvVFKba53fUbUi0ZQxZU6nBn1Rh64TGOPsgXEQsycdfDzJA7pEvVSReL3ZdBfWQmSXfxLTKFLpQPa2KvEqm2t8lf9U5wYi58Y0Lc9Q9kS6Hd6ilkXwAAAABJRU5ErkJggg=="
          ></img>

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
                className=" w-500 h-280 text-white  font-semibold  border border-blue-500 border-solid text-left rounded-lg p-1 flex flex-col align-middle"
              >
                {i === 0 ? (
                  <MonitorDot size={90} color="#38bdf8" strokeWidth={1.25} />
                ) : i === 1 ? (
                  <Component size={90} color="#38bdf8" strokeWidth={1.25} />
                ) : (
                  <Store size={90} color="#38bdf8" strokeWidth={1.25} />
                )}
                <div className="p-1 opacity-70">{service}</div>
                <p className="  text-xs  font-light italic p-1">
                  {services[i] == "Web Development" ? (
                    <p className=" px-1">
                      I Design, Develop and Build Web Applications using the
                      Tech stack above{" "}
                    </p>
                  ) : services[i] == "Web Design" ? (
                    <p className=" px-1"> I specialize in crafting stunning and visually pleasing websites through the art of Figma. My passion lies in creating aesthetically pleasing web designs that not only captivate but also engage users.</p>
                  ) : services[i] == "Digital Marketing" ? (
                    <p className=" px-1">I perform Digital Marketing by promoting businesses services and manage social media account aswell as recommend content ideas to promote the service or product of the business</p>
                  ) : (
                    <p> Does not </p>
                  )}
                
                </p>
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default AboutMain;
