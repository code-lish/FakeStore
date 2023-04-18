import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const About = () => {
  const { t } = useTranslation();
  return (
    <li className="nav-item">
      <NavLink className="nav-link text-dark text-decoration-none" to="/about">
        {t("About")}
      </NavLink>
    </li>
  );
};

export default About;
