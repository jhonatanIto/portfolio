import { useContext } from "react";
import "../styles/about.css";
import { LanguageContext } from "../contex/LanguageContex";
import eu from "../images/eu.png";
function About() {
  const { english } = useContext(LanguageContext);
  return (
    <div className="aboutBody">
      <h1>
        {english
          ? "Hello there, my name is Jhonatan Ito, and I'm a Full-stack Developer."
          : "こんにちは、伊藤ジョナタンと申します。フルスタック開発者です。"}
      </h1>

      {english ? (
        <div className="englishV">
          <p>
            I'm passionate about creating software and turning ideas into
            functional, well-structured solutions.
          </p>

          <p>
            I work with technologies such as <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>Express</strong>, <strong>PostgreSQL</strong>, and{" "}
            <strong>Docker</strong>, developing modern, scalable applications
            with a strong focus on best practices.
          </p>
          <br />
          <p>
            I enjoy solving problems, thinking about architecture, and creating
            a great user experience by combining performance, usability, and
            clean code. I am constantly learning and always seeking to explore
            new technologies and challenges that help me grow as a developer.
          </p>
        </div>
      ) : (
        <div className="englishV">
          <p>
            ソフトウェア開発に情熱を持ち、アイデアを機能的で構造の整ったプロダクトとして具現化することを大切にしています。
          </p>

          <p>
            <strong>HTML</strong>、<strong>CSS</strong>、
            <strong>JavaScript</strong>、<strong>TypeScript</strong>、
            <strong>React</strong>、<strong>Next.js</strong>、
            <strong>Node.js</strong>、<strong>Express</strong>、
            <strong>PostgreSQL</strong>、<strong>Docker</strong>{" "}
            などの技術を使用し、
            モダンでスケーラブルなアプリケーションを、設計や品質を重視して開発しています。
          </p>

          <br />

          <p>
            問題解決やアーキテクチャを考えることが好きで、
            パフォーマンス・使いやすさ・クリーンなコードを
            意識した優れたユーザー体験を提供することを大切にしています。
            常に学び続け、新しい技術やチャレンジを通して
            開発者として成長することを目指しています。
          </p>
        </div>
      )}
      <img className="eu" src={eu} />
    </div>
  );
}

export default About;
