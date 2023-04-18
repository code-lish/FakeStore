import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../users.json";
import { useSelector } from "react-redux";
const Login = () => {
  const { directionRtl } = useSelector((state) => state.products);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    password: "",
  });
  const allUsers = users;
  const { name, password } = contact;

  const [active, setActive] = useState(false);

  const showPassowrd = () => {
    setActive(!active);
  };

  const onChange = (e) =>
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    {
      const user = allUsers.find(
        (user) => user.username === name && user.password === password
      );
      if (user) {
        toast.success(`Welcome ${user.username}`);
        navigate("/Products/showproducts");
      } else {
        toast.error("sorry email or password is wrong");
      }
    }
  };

  return (
    <div className="login-form border border-light bg-white shadow px-3 py-2 rounded">
      <h3 className="text-center py-3 text-primary">
        {/* Welcome To Afghan Store Website */}
        {t("login_title")}
      </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="Name" className="form-label">
          {/* Name: */}
          {t("name")}
        </label>
        <input
          type="text"
          name="name"
          onChange={onChange}
          className="form-control mb-3"
          placeholder="Enter your name"
        />
        <label htmlFor="password" className="form-label">
          {/* Passwrod: */}
          {t("pass")}
        </label>
        <div className="input-group border-0">
          <input
            type={active ? "text" : "password"}
            name="password"
            onChange={onChange}
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
      </form>
      <button
        className="btn btn-outline-primary w-100 mt-4 mb-3"
        onClick={onSubmit}
      >
        {/* Login */}
        {t("Login")}
      </button>
      <Link to="/forgor-password" className="text-decoration-none">
        <p className="lead text-center mt-3 text-dark ">
          {/* Forgot Your Password */}
          {t("forget_pass")}
        </p>
      </Link>
    </div>
  );
};

export default Login;
