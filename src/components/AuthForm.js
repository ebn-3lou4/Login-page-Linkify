import React, { useState } from "react"; // استيراد React و useState
import { motion } from "framer-motion"; // استيراد Framer Motion للرسوم المتحركة
import "../styles/AuthStyles.css"; // استيراد الأسلوب

const AuthForm = ({ type, onSubmit, onSwitch, loading, resetFields }) => {
  const [email, setEmail] = useState(""); // حالة البريد الإلكتروني
  const [password, setPassword] = useState(""); // حالة كلمة المرور
  const [username, setUsername] = useState(""); // حالة اسم المستخدم
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
  }); // حالة الرسائل الخطأ

  // دالة التحقق من صحة النموذج
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "", username: "" };

    // التحقق من البريد الإلكتروني
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    // التحقق من كلمة المرور
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // التحقق من اسم المستخدم (في حالة التسجيل)
    if (type === "register" && !username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // دالة الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // تخزين البيانات في localStorage
      if (type === "login") {
        localStorage.setItem("userData", JSON.stringify({ email, password }));
      } else if (type === "register") {
        localStorage.setItem(
          "userData",
          JSON.stringify({ username, email, password })
        );
      }

      // استدعاء دالة الإرسال الخارجية
      onSubmit(e);

      // مسح الحقول بعد الإرسال
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors({ email: "", password: "", username: "" });

      // استدعاء دالة إعادة التعيين الخارجية (إذا كانت موجودة)
      if (resetFields) {
        resetFields();
      }
    }
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, x: type === "login" ? 100 : -100 }} // حالة البداية (من اليمين لـ Login، من اليسار لـ Register)
      animate={{ opacity: 1, x: 0 }} // حالة الظهور
      exit={{ opacity: 0, x: type === "login" ? -100 : 100 }} // حالة الخروج
      transition={{ duration: 0.5 }} // مدة الانتقال
    >
      <h2>{type === "login" ? "Hi, Welcome back." : "Create an Account"}</h2>
      <form onSubmit={handleSubmit}>
        {type === "register" && (
          <>
            <input
              type="text"
              placeholder="user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
        {type === "login" && (
          <a href="#" className="forgot-password">
            forgot password?
          </a>
        )}
        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="loading-spinner"></span> // دائرة التحميل إذا كان يتم التحميل
          ) : type === "login" ? (
            "Login"
          ) : (
            "Continue"
          )}
        </button>
      </form>
      <p>
        {type === "login" ? "New user? " : "Already have an account? "}
        <span onClick={onSwitch} className="switch-link">
          {type === "login" ? "Create an account" : "Sign in"}
        </span>
      </p>
    </motion.div>
  );
};

export default AuthForm;
