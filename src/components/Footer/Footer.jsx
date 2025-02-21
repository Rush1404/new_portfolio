import linkedin_card_icon from "../../assets/icons/linkedin_card_icon.svg";
import github_card_icon from "../../assets/icons/github_card_icon.svg";
import devpost_card_icon from "../../assets/icons/devpost_card_icon.svg";
import mail_card_icon from "../../assets/icons/mail_card_icon.svg";
import styles from "./Footer.module.css";
import { t } from "../../i18n";
import "../../global.css";

function Footer() {
  return (
    <div>
      <nav className={styles["footer"]}>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-content"]}>
            <div
              className={styles["footer-title"]}
              onClick={() => {
                window.open(
                  "https://github.com/Rush1404",
                  "_blank"
                );
              }}
            >
              {t("footer.title")}
            </div>
            <div className={styles["footer-links"]}>
              <a
                href="https://www.linkedin.com/in/rushabh-shah-ba14a2284/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link"]}
              >
                <img
                  src={linkedin_card_icon}
                  alt="LinkedIn"
                  width="25px"
                  height="25px"
                />
              </a>
              <a
                href="https://github.com/Rush1404"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link"]}
              >
                <img
                  src={github_card_icon}
                  alt="GitHub"
                  width="25px"
                  height="25px"
                />
              </a>
              <a
                href="https://devpost.com/rushabh1404"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link"]}
              >
                <img
                  src={devpost_card_icon}
                  alt="Devpost"
                  width="25px"
                  height="25px"
                />
              </a>
              <a
                href="mailto:rush_the_programmer@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link"]}
              >
                <img
                  src={mail_card_icon}
                  alt="Email"
                  width="25px"
                  height="25px"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
