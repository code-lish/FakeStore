import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <li className="nav-item">
      <NavLink className="nav-link text-dark" to="/contact">
        {t("Contact")}
      </NavLink>
    </li>
  );
};

export default Contact;
