import { useTranslation } from "react-i18next";
import AllProducts from "./AllProducts";
import Electronic from "./Electronic";
import Jewelery from "./Jewelery";
import MenClothes from "./MenClothes";
import WomenClothes from "./WomenClothes";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="text-center latest-product">
        {/* Latest Products */}
        {t("last_products")}
      </h1>
      <hr className="mb-5" />
      <div className="categories d-flex justify-content-center flex-column flex-md-row  flex-wrap">
        <AllProducts />
        <MenClothes />
        <WomenClothes />
        <Jewelery />
        <Electronic />
      </div>
    </div>
  );
};

export default Categories;
