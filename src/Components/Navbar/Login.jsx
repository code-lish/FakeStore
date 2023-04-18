import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/login" className="nav-btn text-decoration-none">
      <button className="nav-link text-dark border-0 bg-transparent mx-0 ms-lg-1 px-0 px-lg-2 mt-1">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right-to-bracket mx-2"></i>
          <span>{t("Login")}</span>
        </div>
      </button>
    </NavLink>
  );
};

export default Login;
