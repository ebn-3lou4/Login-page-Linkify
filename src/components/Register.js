import React, { useState } from "react"; // استيراد React و useState
import { useDispatch, useSelector } from "react-redux"; // استيراد Redux Hooks
import ThemeToggle from "./ThemeToggle"; // استيراد مكون زر الوضع
import AuthForm from "./AuthForm"; // استيراد مكون النموذج
import "./RegisterStyles.css"; // استيراد الأسلوب

const Register = ({ onSwitch }) => {
  const dispatch = useDispatch(); // دالة إرسال الإجراءات إلى Redux
  const { darkMode } = useSelector((state) => state.theme); // الحصول على حالة الوضع المظلم
  const [loading, setLoading] = useState(false); // حالة التحميل

  // دالة الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // تفعيل التحميل
    setTimeout(() => {
      console.log("Register submitted"); // محاكاة الإرسال
      setLoading(false); // إيقاف التحميل بعد 2 ثانية
    }, 2000); // تأخير 2 ثانية
  };

  // دالة إعادة تعيين الحقول (إذا لزم الأمر)
  const resetFields = () => {
    // يمكن إضافة أي منطق إضافي هنا إذا لزم الأمر
    console.log("Fields reset in Register");
  };

  return (
    <div className={`page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <ThemeToggle /> {/* زر الوضع في أعلى اليسار */}
      <div className="auth-wrapper">
        <img
          src={process.env.PUBLIC_URL + "/assets/register-image.png"}
          alt="Register Illustration"
          className="auth-image"
        />
        <AuthForm
          type="register"
          onSubmit={handleSubmit}
          onSwitch={onSwitch}
          loading={loading}
          resetFields={resetFields} // تمرير دالة إعادة التعيين
        />
      </div>
    </div>
  );
};

export default Register;
