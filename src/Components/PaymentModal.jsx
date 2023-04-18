import { useTranslation } from "react-i18next";
import PaymentTables from "./PaymentTables";
const PaymentModal = () => {
  const { t } = useTranslation();

  return (
    <div
      className="modal fade"
      id="paymentModal"
      tabindex="-1"
      aria-labelledby="paymentModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {/* Your Total Account */}
              {t("ur_accoutn")}
            </h5>
            <button
              type="button"
              className="btn-close m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <PaymentTables />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              {/* Close */}
              {t("cls")}
            </button>
            <button type="button" className="btn btn-primary">
              {/* Purchase */}
              {t("purchase")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
