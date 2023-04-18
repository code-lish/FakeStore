import i18n from "../../i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDirection } from "../../Features/ProductSlice";
const Language = () => {
  const dispatch = useDispatch();
  const [rightDirection, setrightDirection] = useState(false);
  const onChange = (e) => {
    const value = e.target.value;
    const direction = document.getElementById("direction");
    if (value === "per" || value === "pash") {
      dispatch(setDirection(true));
      direction.setAttribute("dir", "rtl");
      setrightDirection(true);
    } else {
      dispatch(setDirection(false));
      direction.setAttribute("dir", "ltr");
      setrightDirection(false);
    }
    i18n.changeLanguage(value);
  };
  return (
    <div
      className={rightDirection ? "lang-option right-direction" : "lang-option"}
    >
      <select
        className="form-select mt-1 d-none d-md-block"
        aria-label="Default select"
        onChange={onChange}
      >
        <option value="en">Eng</option>
        <option value="pash">Pashto</option>
        <option value="per">Persion</option>
      </select>
    </div>
  );
};

export default Language;
