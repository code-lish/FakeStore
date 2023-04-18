import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, setCartItems } from "../Features/ProductSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleProductLoading from "./SingleProductLoading";
const SingleProduct = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { singleProduct, isLoading } = useSelector((state) => state.products);
  const { title, category, description, image, price, rating } = singleProduct;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const addToCart = () => {
    dispatch(setCartItems(singleProduct));
  };

  return isLoading ? (
    <>
      <SingleProductLoading />
    </>
  ) : (
    <div className="single-product container my-5">
      <div className="row align-items-center text-align-center">
        <div className="col-12 col-md-6 text-center mb-5 mb-md-0 ">
          {image && (
            <img src={image} alt={title} height="400px" width="300px" />
          )}
        </div>
        <div className="col-12 col-md-6">
          {category && <h3 className="text-primary">{category}</h3>}
          {title && <p className="display-5">{title.toUpperCase()}</p>}
          {rating?.rate && (
            <p className="fw-bold">
              <span>
                {/* Rating */}
                {t("rating")}
                {rating.rate + " "}
              </span>
              <i className="fa-solid fa-star text-primary"></i>
            </p>
          )}
          {price && <h2 className="text-primary">{"$ " + price}</h2>}
          {description && <p className="lead">{description}</p>}
          <button
            className="btn btn-outline-primary w-100  mt-3"
            onClick={addToCart}
          >
            {/* Add to cart */}
            {t("add_to_cart")}
          </button>
          <Link to="/cart" className="btn btn-primary mt-3 w-100">
            {/* Go to cart */}
            {t("go_to_cart")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
