import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCategories } from "../Features/ProductSlice";
const WomenClothes = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getCategories("women's clothing"));
  };
  return (
    <button className="btn btn-primary ms-2 mt-2" onClick={onClick}>
      {/* Women's Clothing */}
      {t("women_clothing")}
    </button>
  );
};

export default WomenClothes;
