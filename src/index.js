import React from "react";
import { createRoot } from "react-dom/client"; // استيراد createRoot لدعم React 18
import App from "./App"; // استيراد المكون الرئيسي
import { store } from "./redux/store"; // استيراد متجر Redux
import { Provider } from "react-redux"; // استيراد Provider لتوصيل Redux
import "./styles/AuthStyles.css"; // استيراد الأسلوب العام

// إنشاء جذر التطبيق
const root = createRoot(document.getElementById("root"));

// تقديم التطبيق
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
