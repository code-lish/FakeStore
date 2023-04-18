import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCategories } from "../Features/ProductSlice";
const MenClothes = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getCategories("men's clothing"));
  };
  return (
    <button className="btn btn-primary ms-2 mt-2" onClick={onClick}>
      {/* Men's Clothing */}
      {t("men_clothing")}
    </button>
  );
};

export default MenClothes;
