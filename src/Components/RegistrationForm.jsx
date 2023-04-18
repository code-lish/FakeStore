import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const RegistrationForm = () => {
  const { directionRtl } = useSelector((state) => state.products);
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const showPassowrd = () => {
    setActive(!active);
  };
  return (
    <div className="login-form border border-light bg-white shadow px-3 py-2 rounded">
      <h3 className="text-center py-3 text-primary">
        {/* Registration Form */}
        {t("register_title")}
      </h3>
      <form>
        <label htmlFor="Name" className="form-label fw-bold">
          {/* Name */}
          {t("name")}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />

        <label htmlFor="lastname" className="form-label mt-2 fw-bold">
          {/* L/Name */}
          {t("l_name")}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your last name"
        />

        <label htmlFor="Email" className="form-label  mt-2 fw-bold">
          {/* Email */}
          {t("email_lable")}
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="form-label  mt-2 fw-bold">
          {/* Password */}
          {t("pass")}
        </label>
        <div className="input-group border-0">
          <input
            type={active ? "text" : "password"}
            name="password"
            className={
              directionRtl
                ? "form-control rounded-0 border-start-0 rounded-end"
                : "form-control rounded-0  border-end-0 rounded-start"
            }
            placeholder="Enter your password"
          />
          <i
            className={
              directionRtl
                ? `fa-solid fa-eye py-2 px-2 border border-end-0 rounded-start ${
                    active && "active"
                  }`
                : `fa-solid fa-eye py-2 px-2 border border-start-0 rounded-end ${
                    active && "active"
                  }`
            }
            onClick={showPassowrd}
          ></i>
        </div>

        <label htmlFor="passowrd2" className="form-label  mt-2 fw-bold">
          {/* Confirm Password */}
          {t("pass2")}
        </label>
        <div className="input-group">
          <input
            type={active ? "text" : "password"}
            name="password"
            className="form-control"
            placeholder="Confirm your password"
          />
        </div>
      </form>
      <button className="btn btn-primary w-100 my-4">
        {/* Register */}
        {t("Register")}
      </button>
      <Link to="/login">
        <p className="my-2 text-center">
          {/* Have Already An Account */}
          {t("already_account")}
        </p>
      </Link>
    </div>
  );
};

export default RegistrationForm;
