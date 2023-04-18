import Cart from "./Cart";
import Login from "./Login";
import Nav from "./Nav";
import Register from "./Register";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import Language from "./Language";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container bg-light ">
        <a className="navbar-brand">
          <span className="fw-bold fs-4   text-primary ms-2 ms-md-0">
            {" "}
            {t("Afghan_Store")}{" "}
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbartoggler"
          aria-controls="navbartoggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbartoggler">
          <Search />
          <Nav />
          <div className="auth ms-2 ms-md-0 flex-column d-flex align-items-start flex-sm-row">
            <Login />
            <Register />
            <Cart />
          </div>
        </div>
      </div>
      <>
        <Language />
      </>
    </nav>
  );
};

export default Navbar;
