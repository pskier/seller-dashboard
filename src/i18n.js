import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      "dashboard": "Panel Sprzedawcy",
      "orders": "Zamówienia",
      "quality": "Jakość Sprzedaży",
      "reviews": "Opinie Kupujących",
      "ranking": "Ranking Ofert",
      "chart": "Wykres Sprzedaży",
      "tips": "Porady",
      "logout": "Wyloguj",
      "unpaid": "Nieopłacone",
      "unsent": "Niewysłane",
      "returns": "Zwroty"
    }
  },
  en: {
    translation: {
      "dashboard": "Seller Dashboard",
      "orders": "Orders",
      "quality": "Sales Quality",
      "reviews": "Buyer Reviews",
      "ranking": "Offers Ranking",
      "chart": "Sales Chart",
      "tips": "Tips",
      "logout": "Logout",
      "unpaid": "Unpaid",
      "unsent": "Unsent",
      "returns": "Returns"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: { escapeValue: false }
});

export default i18n;