import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PaymentTable from "./PaymentTable";
const PaymentTables = () => {
  const { t } = useTranslation();

  const { total, cartItems, directionRtl } = useSelector(
    (state) => state.products
  );
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            {/* Id */}
            {t("table_id")}
          </th>
          <th scope="col">
            {/* Title */}
            {t("table_title")}
          </th>
          <th scope="col">
            {/* Price */}
            {t("table_price")}
          </th>
          <th scope="col">
            {/* Quentity */}
            {t("table_qnt")}
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((row, index) => (
          <PaymentTable item={row} index={index} key={row.id} />
        ))}
        <tr>
          <th scope="row" className="table-active">
            {/* Total: */}
            {t("table_total")}
          </th>
          <th scope="row" colSpan="4" className="table-active px-4">
            <p
              className={
                directionRtl ? "float-start p-0 m-0" : "float-end p-0 m-0"
              }
            >
              {"$ " + total?.toFixed(3)}
            </p>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentTables;
