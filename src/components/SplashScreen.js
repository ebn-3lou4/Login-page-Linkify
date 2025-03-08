import React, { useEffect } from "react"; // استيراد React و useEffect
import { useNavigate } from "react-router-dom"; // استيراد التنقل بين الصفحات
import { motion } from "framer-motion"; // استيراد Framer Motion
import "./SplashScreenStyles.css"; // استيراد الأسلوب

const SplashScreen = () => {
  const navigate = useNavigate(); // دالة التنقل

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // الانتقال إلى صفحة Login بعد 5 ثوانٍ
    }, 5000); // 5000 مللي ثانية = 5 ثوانٍ

    // تنظيف الـ Timer عند ترك المكون
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 0 }} // حالة البداية (شفاف)
      animate={{ opacity: 1 }} // حالة الظهور
      exit={{ opacity: 0 }} // حالة الخروج
      transition={{ duration: 0.5 }} // مدة الانتقال
    >
      <img src="/assets/logo.png" alt="Linkify Logo" className="splash-logo" />
      <div className="background-circles"></div> {/* حاوية الدوائر */}
    </motion.div>
  );
};

export default SplashScreen;
