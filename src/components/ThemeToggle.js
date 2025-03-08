import React from "react"; // استيراد React
import { useDispatch, useSelector } from "react-redux"; // استيراد Redux Hooks
import { toggleTheme } from "../redux/themeSlice"; // استيراد إجراء تغيير الوضع
import "./ThemeToggleStyles.css"; // استيراد الأسلوب

const ThemeToggle = () => {
  const dispatch = useDispatch(); // دالة إرسال الإجراءات
  const { darkMode } = useSelector((state) => state.theme); // الحصول على حالة الوضع

  return (
    <button onClick={() => dispatch(toggleTheme())} className="theme-toggle">
      {darkMode ? "🌙" : "☀️"} {/* أيقونة القمر أو الشمس حسب الوضع */}
    </button>
  );
};

export default ThemeToggle;
