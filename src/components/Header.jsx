import { useState } from "react";

function Header() {
  const tabs = ["Home", "About", "Project", "Contact"];
  const [english, setEnglish] = useState(true);
  const [currSelect, setCurrSelect] = useState("Home");
  console.log(currSelect);
  return (
    <header>
      <div className="jhonatan">
        <div className="jho">
          <div>{english === true ? "Jhonatan" : "伊藤"}</div>
          <div>{english === true ? "Ito" : "ジョナタン"}</div>
        </div>
      </div>
      <div className="menuTabs">
        {tabs.map((tab, key) => {
          if (tab !== "Contact") {
            return (
              <button
                key={key}
                onClick={() => {
                  setCurrSelect(tab);
                }}
                className={`tabButt ${
                  currSelect === tab ? "selectedButton" : "tabButt"
                }`}
              >
                {tab}
              </button>
            );
          } else {
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
