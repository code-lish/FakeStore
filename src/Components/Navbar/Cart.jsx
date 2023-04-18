import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Cart = () => {
  const { t } = useTranslation();

  const { cartItems } = useSelector((state) => state.products);

  return (
    <NavLink to="/cart" className="nav-btn text-decoration-none">
      <button className="nav-link text-dark mx-0 mt-1 mx-lg-2 px-0 border-0 bg-transparent ">
        <i className="fa-solid fa-cart-plus mx-2"></i>
        <span>
          {t("Cart")} ({cartItems.length})
        </span>
      </button>
    </NavLink>
  );
};

export default Cart;
