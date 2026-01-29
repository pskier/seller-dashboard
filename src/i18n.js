import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      // SIDEBAR
      "portal_title": "Portal Sprzedawcy",
      "menu_home": "Strona główna",
      "menu_reviews": "Opinie",
      "menu_orders": "Zamówienia",
      "menu_logout": "Wyloguj",

      // HEADER
      "select_account": "Wybierz konto",
      "account_main": "Konto Główne (PL)",
      "account_de": "Sklep Berlin (DE)",
      "account_dropshipping": "Dropshipping V2",
      "logout": "Wyloguj",

      // STRONA LOGOWANIA
      "login_title": "Zaloguj z ID:",
      "login_placeholder": "Nr ID",
      "login_btn": "Zaloguj",
      "alert_id": "Wpisz identyfikator",
      
      // Wykres
      "chart_title": "Wykres sprzedaży",
      "chart_range": "Zakres",
      "chart_type": "Typ",
      "chart_measure": "Miara",
      "chart_compare": "Porównaj",

      // Zamówienia
      "orders_title": "Zamówienia",
      "orders_unsent": "Niewysłane",
      "orders_unpaid": "Nieopłacone",
      "orders_returns": "Zwroty",

      // Jakość
      "quality_title": "Jakość sprzedaży",
      "quality_bestseller": "Bestseller",
      "quality_shipping": "Czas Wysyłki",
      "quality_response": "Czas Odpowiedzi",
      "quality_relationship": "Budowanie relacji",

      // Porady
      "tips_title": "Porady sprzedażowe",
      "tip_content": "Treść porady...", 

      // Opinie
      "reviews_title": "Opinie kupujących",
      "review_user": "Nazwa użytkownika",
      "review_text": "Przykładowa opinia użytkownika o produkcie...",

      // Ranking
      "ranking_title": "Ranking ofert",
      "ranking_product": "Nazwa produktu",
      "ranking_sold": "Sprzedane",
      "ranking_turnover": "Obrót",

      //strony
      "page_orders_title": "Lista Zamówień",
      "page_orders_filter": "Wybrana kategoria: ",
      "page_quality_title": "Szczegóły Jakości Sprzedaży",
      "page_reviews_title": "Wszystkie Opinie",

      //filtry
      "filter_all": "Wszystkie",
      "filter_unpaid": "Nieopłacone",
      "filter_unsent": "Niewysłane",
      "filter_returns": "Zwroty",
      "filter_all": "Wszystkie",
      "filter_positive": "Pozytywne",
      "filter_negative": "Negatywne",
      "sort_most_bought": "Najczęściej kupowane",
      "sort_least_bought": "Najrzadziej kupowane",

      "col_views": "Wyświetlenia", 
      "chart_measure_turnover": "Obrót",
      "chart_measure_sold": "Sprzedane sztuki",
      "chart_range_today": "Dziś",
      "chart_range_week": "Obecny tydzień",
      "chart_range_prev_week": "Poprzedni tydzień",
      "chart_type_bar": "Słupkowy",
      "chart_type_line": "Liniowy",
      
      // komunikaty
      "msg_no_orders": "Brak zamówień? Skorzystaj z naszych usług promocyjnych!",
      "msg_no_reviews": "Brak opinii kupujących.",
      "msg_no_offers": "Brak ofert do wyświetlenia."
    }
  },
  en: {
    translation: {
      // SIDEBAR
      "portal_title": "Seller Portal",
      "menu_home": "Dashboard",
      "menu_reviews": "Reviews",
      "menu_orders": "Orders",
      "menu_logout": "Logout",

      // HEADER
      "select_account": "Select Account",
      "account_main": "Main Account (PL)",
      "account_de": "Shop Berlin (DE)",
      "account_dropshipping": "Dropshipping V2",
      "logout": "Logout",

      // LOGIN
      "login_title": "Log in with ID:",
      "login_placeholder": "ID Number",
      "login_btn": "Log In",
      "alert_id": "Enter ID",

      // Chart
      "chart_title": "Sales Chart",
      "chart_range": "Range",
      "chart_type": "Type",
      "chart_measure": "Measure",
      "chart_compare": "Compare",

      // Orders
      "orders_title": "Orders",
      "orders_unsent": "Unsent",
      "orders_unpaid": "Unpaid",
      "orders_returns": "Returns",

      // Quality
      "quality_title": "Sales Quality",
      "quality_bestseller": "Bestseller",
      "quality_shipping": "Shipping Time",
      "quality_response": "Response Time",
      "quality_relationship": "Relationships",

      // Tips
      "tips_title": "Sales Tips",
      "tip_content": "Tip content goes here...",

      // Reviews
      "reviews_title": "Buyer Reviews",
      "review_user": "User Name",
      "review_text": "Sample user review regarding the product...",

      // Ranking
      "ranking_title": "Offers Ranking",
      "ranking_product": "Product Name",
      "ranking_sold": "Sold",
      "ranking_turnover": "Turnover",

      // pages
      "page_orders_title": "Orders List",
      "page_orders_filter": "Selected category: ",
      "page_quality_title": "Sales Quality Details",
      "page_reviews_title": "All Reviews",

      // filters
      "filter_all": "All",
      "filter_unpaid": "Unpaid",
      "filter_unsent": "Unsent",
      "filter_returns": "Returns",
      "filter_all": "All",
      "filter_positive": "Positive",
      "filter_negative": "Negative",

      // messages
      "msg_no_orders": "No orders? Use our promotion services!",
      "msg_no_reviews": "No buyer reviews yet.",
      "msg_no_offers": "No offers to display.",
      "sort_most_bought": "Most bought",
      "sort_least_bought": "Least bought",
      "col_views": "Views",
      "chart_measure_turnover": "Turnover",
      "chart_measure_sold": "Sold units",
      "chart_range_today": "Today",
      "chart_range_week": "Current Week",
      "chart_range_prev_week": "Previous Week",
      "chart_type_bar": "Bar Chart",
      "chart_type_line": "Line Chart"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl",
    fallbackLng: "pl",
    interpolation: { escapeValue: false }
  });

export default i18n;