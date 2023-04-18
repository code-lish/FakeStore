import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCategories } from "../Features/ProductSlice";
const Jewelery = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getCategories("jewelery"));
  };

  return (
    <button className="btn btn-primary mt-2 ms-2" onClick={onClick}>
      {/* Jewelery */}
      {t("jewelery")}
    </button>
  );
};

export default Jewelery;
