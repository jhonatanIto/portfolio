import "../styles/banner.css";
function Home() {
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
            <img className="icons" src="src/images/physics.png" />
            <img className="icons" src="src/images/nodejs.png" />
            <img className="icons" src="src/images/sql.webp" />
          </div>
        </div>
        <div className="title">Developer</div>
      </div>
      <div className="links">
        <a href="https://github.com/jhonatanIto">
          <div className="linkButt">
            {" "}
            <img className="github" src="src/images/github tutu.png" /> Github
          </div>
        </a>

        <div className="linkButt">
          <img className="in" src="src/images/in.png" /> Linkedin
        </div>
      </div>
      <div>testando</div>
    </div>
  );
}

export default Home;
