import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Products = () => {
  const { t } = useTranslation();
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link text-dark" to="/Products/showproducts">
          {t("Prodcuts")}
        </NavLink>
      </li>
    </>
  );
};

export default Products;
