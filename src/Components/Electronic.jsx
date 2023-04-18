import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getCategories } from "../Features/ProductSlice";
const Electronic = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getCategories("electronics"));
  };
  return (
    <button className="btn btn-primary ms-2 mt-2" onClick={onClick}>
      {/* Electronic */}
      {t("elec")}
    </button>
  );
};

export default Electronic;
