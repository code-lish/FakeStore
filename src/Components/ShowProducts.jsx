import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Features/ProductSlice";
import Product from "./Product";
import Loading from "./Loading";
import Categories from "./Categories";
import FilteredProducts from "./FilteredProducts";
const ShowProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products, isLoading, filtered } = useSelector(
    (state) => state.products
  );
  return isLoading ? (
    <>
      <Categories />
      <div className="container-fluid text-center mt-5 row row-cols-12 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mb-4 ">
        <Loading />
      </div>
    </>
  ) : (
    <>
      <Categories />
      {filtered !== null ? (
        <FilteredProducts />
      ) : (
        <div className="container-fluid text-center mt-5 row row-cols-12 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4 mb-4 align-items-start">
          {products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShowProducts;
