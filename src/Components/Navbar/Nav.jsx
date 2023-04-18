import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";

const Nav = () => {
  return (
    <ul className="nav">
      <Home />
      <Products />
      <About />
      <Contact />
    </ul>
  );
};

export default Nav;
