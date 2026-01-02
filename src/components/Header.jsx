import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const tabs = ["/", "About", "Projects", "Contact"];
  const [english, setEnglish] = useState(true);
  const [currSelect, setCurrSelect] = useState("");

  useEffect(() => {
    const sec = localStorage.getItem("tabs") || "/";
    setCurrSelect(sec);
  }, []);

  function tabElements(tab, key) {
    return (
      <button
        key={key}
        onClick={() => {
          setCurrSelect(tab);
          localStorage.setItem("tabs", tab);
        }}
        className={`tabButt ${currSelect === tab ? "selectedButton" : ""}`}
      >
        {tab !== "/" ? tab : "Home"}
      </button>
    );
  }

  return (
    <header>
      <div className="jhonatan">
        <Link to="/">
          <div className="jho">
            <div>{english === true ? "Jhonatan" : "伊藤"}</div>
            <div>{english === true ? "Ito" : "ジョナタン"}</div>
          </div>
        </Link>
      </div>
      <div className="menuTabs">
        {tabs.map((tab, key) => {
          if (tab === "/") {
            return <Link to="/">{tabElements(tab, key)}</Link>;
          }
          if (tab !== "Contact") {
            return <Link to={tab}>{tabElements(tab, key)}</Link>;
          } else if (tab === "Contact") {
            return (
              <button className="tabButt">
                <a href="mailto:jhonatan-ito@hotmail.com">{tab}</a>{" "}
              </button>
            );
          }
        })}
      </div>
      <div className="language">
        <div className="languageBorder">
          <div className="langCont">
            <div onClick={() => setEnglish(true)} className="langSec">
              English
            </div>
            <div onClick={() => setEnglish(false)} className="langSec">
              日本語
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
