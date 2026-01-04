import { useContext } from "react";
import { LanguageContext } from "../contex/LanguageContex";

function ProjectCard(props) {
  const { name, img } = props;
  const { english } = useContext(LanguageContext);
  return (
    <div className="projectCard">
      <img className="imgCard" src={img} />
      <div className="cardText">
        <div className="cardTitle">{name}</div>
        <div className="cardDescription">
          {" "}
          alot of text jdfçlkiashdfçlakns çalsdifh çaoidjfhçlakj dsfkauh
          fdçlakshdj fçlakjdsf çladsf
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
