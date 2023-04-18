import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link text-dark text-decoration-none"
        aria-current="page"
        to="/"
      >
        {t("Home")}
      </NavLink>
    </li>
  );
};

export default Home;
