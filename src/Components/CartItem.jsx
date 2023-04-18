import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  setCartItems,
  decCartItemsQuntity,
} from "../Features/ProductSlice";
const CartItem = ({ cart }) => {
  const { directionRtl } = useSelector((state) => state.products);
  const { title, category, image, price, quentity } = cart;
  const dispatch = useDispatch();
  const [qnt, setQnt] = useState(quentity);

  const total = (qnt * price).toFixed(3);

  const incQuentity = () => {
    setQnt(qnt + 1);
    dispatch(setCartItems({ ...cart, quentity: qnt }));
  };

  const decQuentity = () => {
    setQnt(qnt - 1);
    dispatch(decCartItemsQuntity(cart));
    if (qnt <= 1) {
      dispatch(removeItemFromCart(cart));
    }
  };
  return (
    <div className="row my-5 pb-2">
      <div className="col-6 border-1">
        <img src={image} alt={title} width="200px" height="280px" />
      </div>
      <div className="col-6">
        <h4 className="text-primary">{category}</h4>
        <p className="lead fw-bold mt-4"> {title}</p>
        <p className="fs-3 text">
          {directionRtl ? (
            <span>
              {total} = {price} * {qnt}
            </span>
          ) : (
            <span>
              {qnt} * {price} = {total}
            </span>
          )}
        </p>
        {directionRtl ? (
          <div>
            <button className="btn btn-outline-primary" onClick={incQuentity}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              className="btn btn-outline-primary mx-3"
              onClick={decQuentity}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-outline-primary mx-3"
              onClick={decQuentity}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <button className="btn btn-outline-primary" onClick={incQuentity}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
