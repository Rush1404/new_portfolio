import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import { t } from "../../i18n";
import "../../global.css";
import myocharm from "../../assets/thumbnails/myocharm.svg";
import jinas from "../../assets/thumbnails/jinas.svg";
import synapse from "../../assets/thumbnails/synapse.svg";
import fallback from "../../assets/thumbnails/default.webp";
import RevealDiv from "../../utils/RevealDiv";

function Projects() {
  const projects = t("projects.content");
  const thumbnails = {
    myocharm: myocharm,
    jinas: jinas,
    synapse: synapse,
  };

  const border_colors = {
    myocharm: "#f589ea",
    jinas: "#ffffff",
    synapse: "#ffffff",
  };

  return (
    <div className={styles["projects"]}>
      <RevealDiv className={styles["projects-title"]}>
        <h1>{t("projects.title")}</h1>
      </RevealDiv>
      <RevealDiv>
        <p>{t("projects.subtitle")}</p>
      </RevealDiv>

      <div className={styles["projects-container"]}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={thumbnails[project.img] ? thumbnails[project.img] : fallback}
            title={project.title ? project.title : null}
            description={project.description ? project.description : null}
            github={project.github ? project.github : null}
            devpost={project.devpost ? project.devpost : null}
            website={project.website ? project.website : null}
            tags={project.tags ? project.tags : null}
            border_color={
              border_colors[project.img] ? border_colors[project.img] : null
            }
            show_border_passive={project.show_border_passive}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
