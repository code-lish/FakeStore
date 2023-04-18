import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import PaymentModal from "./PaymentModal";
import { setTotal } from "../Features/ProductSlice";
const CartItems = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.products);

  useEffect(() => {}, [cartItems]);

  return cartItems.length <= 0 ? (
    <div className="cart  container py-2 text-center">
      <h1 className="display-2">
        {/* Your Cart is Emplty. */}
        {t("empty_Cart")}
      </h1>
    </div>
  ) : (
    <div className="cart container">
      <div className="row">
        <div className="col-12">
          {cartItems.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <button
          type="button"
          className="payment-btn m-auto btn btn-outline-primary my-5"
          data-bs-toggle="modal"
          data-bs-target="#paymentModal"
          onClick={() => dispatch(setTotal())}
        >
          {/* Proceed to checkout */}
          {t("procced_checkout")}
        </button>
        <PaymentModal />
      </div>
    </div>
  );
};

export default CartItems;
