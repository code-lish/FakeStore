import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Products = ({ product: { image, price, title, id } }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="card border-1">
        <img
          src={image}
          className="car-img-top m-auto"
          alt={title}
          height="250px"
          width="200px"
        />
        <div className="card-body">
          <p className="card-title fw-bold">{title.substring(1, 20) + "..."}</p>
          <h5 className="card-text">{price + " $"}</h5>
          <Link
            to={`/products/${id}`}
            className="btn btn-outline-primary w-100"
          >
            {/* Buy */}
            {t("buy")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
