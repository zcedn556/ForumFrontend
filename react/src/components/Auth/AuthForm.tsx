import React, { useState } from "react";
import "../../css/AuthForm.css";
import { useNavigate } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  password: string;
};

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login data:", { email: form.email, password: form.password});
      navigate("/");
    } else {
      console.log("Register data:", form);
      setIsLogin(true);
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>

        <p className="auth-switch">
          {isLogin ? "No account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(prev => !prev)}
            className="auth-link">
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;