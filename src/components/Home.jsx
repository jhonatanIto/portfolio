import { useContext } from "react";
import "../styles/banner.css";
import ProjectCard from "./ProjectCard";
import { LanguageContext } from "../contex/LanguageContex";
function Home() {
  const { english } = useContext(LanguageContext);
  return (
    <div className="bannerBody">
      <div className="oneSide">
        <div className="title">Full-stack</div>
        <div className="flex">
          <button className="butt">Projects</button>
          <button className="buttNext">
            <img className="arrow" src="src/images/arrow.png" />
          </button>
        </div>
      </div>
      <div className="oneSide">
        <div className="toolContainer">
          <div className="iconContainer">
            <img className="icons" src="src/images/html-5.png" />
            <img className="icons" src="src/images/css-3.png" />
            <img className="icons" src="src/images/js.png" />
            <img className="icons" src="src/images/typescript.png" />
            <img className="icons" src="src/images/physics.png" />
            <img className="icons" src="src/images/nodejs.png" />
            <img className="icons" src="src/images/sql.webp" />
          </div>
        </div>
        <div className="title">Developer</div>
      </div>
      <div className="links">
        <a
          href="https://github.com/jhonatanIto"
          target="_blank"
          rel="nooper noreferrer"
        >
          <div className="linkButt">
            {" "}
            <img className="github" src="src/images/github tutu.png" /> Github
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jhonatan-ito-9a1052394/"
          target="_blank"
          rel="nooper noreferrer"
        >
          <div className="linkButt">
            <img className="in" src="src/images/in.png" /> Linkedin
          </div>
        </a>
      </div>

      <div className="fullTitle">Full-stack Projects:</div>
      <div className="projectsContainer">
        <ProjectCard
          name={english === true ? "A.I Drum-Sheet" : "A.I ドラム楽譜"}
          img={"src/images/music.svg"}
        />
        <a
          href="https://expense-tracker-pied-six-60.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            name={english === true ? "Expense-Tracker" : "支出管理"}
            img={"src/images/money2.jpg"}
          />
        </a>
        <a
          href="https://movies-review-tan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            name={english === true ? "Movies Review" : "映画の感想"}
            img={"src/images/movies.jpg"}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
