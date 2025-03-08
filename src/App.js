import React from "react";
import { Provider } from "react-redux"; // استيراد Provider
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // استيراد React Router
import store from "./redux/store"; // استيراد المتجر
import Login from "./components/Login"; // استيراد صفحة Login
import Register from "./components/Register"; // استيراد صفحة Register
import SplashScreen from "./components/SplashScreen"; // استيراد صفحة Splash
import "./styles/AuthStyles.css"; // استيراد الأسلوب العام

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />{" "}
          {/* الصفحة الابتدائية */}
          <Route
            path="/login"
            element={
              <Login onSwitch={() => (window.location.href = "/register")} />
            }
          />
          <Route
            path="/register"
            element={
              <Register onSwitch={() => (window.location.href = "/login")} />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
