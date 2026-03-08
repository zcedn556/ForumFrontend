import React, { useState } from "react";
import "../../css/AuthForm.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

type FormState = {
  username: string;
  password: string;
};

const AuthForm: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<FormState>({
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try{
      if (isLogin) {
      await new Promise(r => setTimeout(r, 2000))
      const res = await fetch(`${import.meta.env.VITE_API_URL}/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: form.username, password: form.password }),
      })
      
      const data = await res.json();

      if (!res.ok) {
        alert("Login failed: " + (data.detail || "Unknown error"));
        return;
      }

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      login(data.access, form.username);

      navigate("/");
    } else {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password
        }),
      });

      if (!res.ok) {
        alert("Registration failed");
        return;
      }

      const data = await res.json();
      console.log(data);

      setIsLogin(true);
    }}
    catch(err){
      console.log(err);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
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

        <button type="submit" className={isLoading ? "disabled" : ""}>{isLoading ? "Loading" : isLogin ? "Login" : "Register"}</button>

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