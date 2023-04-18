import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishTransalation from "./EnglishTransalation.json";
import PersionTransalation from "./PersionTransalation.json";
import PashtoTransalation from "./PashotoTransalation.json";

const resources = {
  en: {
    translation: EnglishTransalation,
  },
  per: {
    translation: PersionTransalation,
  },
  pash: {
    translation: PashtoTransalation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
