import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { getProducts } from "../Features/ProductSlice";
const AllProducts = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-primary ms-2 mt-2"
      onClick={() => dispatch(getProducts())}
    >
      {t("all")}
    </button>
  );
};

export default AllProducts;
