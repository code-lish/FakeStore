import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/register" className="nav-btn text-decoration-none">
      <button className="nav-link text-dark mx-0 mx-md-2 ms-lg-2 mt-1 px-0 px-lg-2  border-0 bg-transparent">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-user-plus mx-2"></i>
          <span>{t("Register")}</span>
        </div>
      </button>
    </NavLink>
  );
};
export default Register;
