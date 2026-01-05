import "../styles/projects.css";
import cat from "../images/gitBlack.svg";
import { useContext } from "react";
import { LanguageContext } from "../contex/LanguageContex";

function MiniCard(props) {
  const { title, code, description } = props;
  return (
    <div className="cardBox">
      <div className="miniTitle">{title}</div>
      <div className="miniDescription">{description}</div>
      <div className="miniButtContainer">
        <a target="_blank" rel="nooper noreferrer" href={code}>
          <button className="miniButt">
            <img className="cat" src={cat} />
            View Code
          </button>
        </a>
        <button className="miniButt">Start App</button>
      </div>
    </div>
  );
}

function Projects() {
  const { english } = useContext(LanguageContext);
  return (
    <div className="projectsBody">
      <MiniCard
        description={
          english
            ? "JavaScript-based currency converter using an external API for real-time USD ↔ JPY exchange rates."
            : "外部APIを利用してリアルタイムのUSD↔JPY為替レートを取得する、JavaScript製の通貨コンバーターです。"
        }
        code={"https://github.com/jhonatanIto/exchange_converter"}
        title={"Currency Coverter"}
      />
      <MiniCard
        description={
          english
            ? "A SPONGE BOB memory card game developed with React, focusing on state management, component structure, and interactive user experience."
            : "Reactで開発されたスポンジ・ボブのメモリーカードゲームです。状態管理やコンポーネント構造に重点を置き、インタラクティブなユーザー体験を提供します。"
        }
        code={"https://github.com/jhonatanIto/react-SpongeBob-memory-game"}
        title={"Memory Game"}
      />
      <MiniCard
        description={
          english
            ? "JavaScript-based unit converter with real-time conversions between kg/lbs, cm/feet/inches, and km/miles."
            : "JavaScriptで開発された単位変換アプリで、kg/lbs、cm/feet・inches、km/milesのリアルタイム変換に対応しています。"
        }
        code={"https://github.com/jhonatanIto/Quick-Converter"}
        title={"lbs/kg converter"}
      />
      <MiniCard
        description={
          english
            ? "Interactive Naruto-themed quiz developed with pure JavaScript. The app displays random questions with images, handles user answers dynamically, and tracks progress until all questions are completed."
            : "ピュアなJavaScriptで開発されたナルトをテーマにしたインタラクティブなクイズアプリです。画像付きの質問をランダムに表示し、ユーザーの回答を動的に処理しながら、すべての問題を完了するまで進行状況を管理します。"
        }
        code={"https://github.com/jhonatanIto/NARUTO-QUIZ"}
        title={"Naruto quiz"}
      />
    </div>
  );
}

export default Projects;
