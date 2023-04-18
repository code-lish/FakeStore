import { useDispatch } from "react-redux";
import { setFilteredProducts } from "../../Features/ProductSlice";
const Search = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setFilteredProducts(e.target.value));
  };

  return (
    <>
      <form className="search mt-2">
        <input
          className="form-control me-2 bg-light border-0 text-primary fw-bold"
          type="search"
          placeholder="Search Product..."
          aria-label="Search"
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default Search;
