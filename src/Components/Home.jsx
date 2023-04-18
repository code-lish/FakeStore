import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Features/ProductSlice";
import Product from "./Product";
import Loading from "./Loading";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { products, isLoading } = useSelector((state) => state.products);
  return (
    <>
      <div className="carousel-container">
        <div
          id="carousel"
          className="carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <h1 className="title">
            {/* <p>Afghan Store</p> */}
            <p>{t("home_title")}</p>
            {/* The First Online Shopping Website In Afghanistan */}
            {t("home_content")}
          </h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center latest-product">
          {/* Latest Products */}
          {t("last_products")}
        </h1>
        <hr className="mb-5" />
        {isLoading ? (
          <div className="container-fluid text-center mt-5 row row-cols-12 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mb-4 ">
            <Loading />
          </div>
        ) : (
          <div className="container-fluid text-center mt-5 row row-cols-12 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mb-4 align-items-start">
            {products?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
