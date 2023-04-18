import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about container">
      <h1 className="display-1 fw-bold text-primary">
        {/* Afghan Store */}
        {t("about_title")}
      </h1>
      <p className="display-5 lead">
        {/* The first Aghan website for online shopping... */}
        {t("about_content")}
      </p>
      <p className="lead">
        {/* v : 1.0.0 */}
        {t("version")}
      </p>
      <p className="fw-bold">
        {/* Developer: Noormohammad Rahimi */}
        {t("developer")}
      </p>
    </div>
  );
};

export default About;
