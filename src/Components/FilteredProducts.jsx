import { useSelector } from "react-redux";
import FilteredProduct from "./FilteredProduct";
const FilteredProducts = () => {
  const { filtered } = useSelector((state) => state.products);
  return (
    <div className="container-fluid text-center mt-5 row row-cols-12 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mb-4 align-items-start">
      {filtered?.map((product) => (
        <FilteredProduct product={product} key={product.id} />
      ))}
    </div>
  );
};

export default FilteredProducts;
