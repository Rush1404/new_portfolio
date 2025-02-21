import ProjectCard from "../Projects/ProjectCard";
import { TypeAnimation } from "react-type-animation";
import styles from "./Work.module.css";
import { t } from "../../i18n";
import "../../global.css";
import jinas from "../../assets/thumbnails/jinas.svg";
import pmcommu from "../../assets/images/pmcommu.png";
import fallback from "../../assets/thumbnails/default.webp";
import RevealDiv from "../../utils/RevealDiv";

function Work() {
  const work = t("work.content");
  const thumbnails = {
    jinas: jinas,
    pmcommu: pmcommu,
  };

  const border_colors = {
    jinas: "var(--jinas-border)",
    pmcommu: "var(--pmcommu-border)",
  };

  return (
    <div className={styles["work"]}>
      <RevealDiv className={styles["work-title"]}>
        <h1>{t("work.title")}</h1>
      </RevealDiv>
      <RevealDiv>
        <p>{t("work.subtitle")}</p>
      </RevealDiv>
      <div className={styles["work-container"]}>
        {work.map((company, index) => (
          <ProjectCard
            key={index}
            image={thumbnails[company.img] ? thumbnails[company.img] : fallback}
            title={company.title ? company.title : null}
            description={company.description ? company.description : null}
            github={company.github ? company.github : null}
            devpost={company.devpost ? company.devpost : null}
            website={company.website ? company.website : null}
            tags={company.tags ? company.tags : null}
            border_color={
              border_colors[company.img] ? border_colors[company.img] : null
            }
            show_border_passive={company.show_border_passive}
          />
        ))}
      </div>
    </div>
  );
}
export default Work;
