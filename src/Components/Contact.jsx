import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="about container">
      <h1 className="fs-4 text-center">
        {/* This is web site created by Noormohammad Rahemi */}
        {t("about_me")}{" "}
        <p className="lead mt-2">
          {/* React Developer */}
          {t("R_dev")}
        </p>
      </h1>
      <p className="lead display-6 fs-4">
        {/* Telegeram:@rahemi77 */}
        {t("tele")}
        <br />
        {/* Twitter:@rahemi1377 */}
        {t("twitter")}
        <br />
        {/* Email: n.rahemi1377@gmail.com */}
        {t("email")}
      </p>
    </div>
  );
};

export default Contact;
