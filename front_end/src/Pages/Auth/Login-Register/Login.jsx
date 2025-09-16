import axios from "axios";
import React, { useState,useEffect } from "react";
import Cookie from "cookie-universal";
import "./form.css";
import "./register-login.css";
import Preloader from "../../Website/Preloader/Preloader";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const cookie = Cookie();
   const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await axios.post("http://127.0.0.1:8080/api/login", form);
      setLoading(false);
      const token = res.data.data.token;
      cookie.set("CuberWeb", token);
      window.location.pathname = `/home`;
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          setErr("Wrong Email or Password");
        } else {
          setErr("Internal server error");
        }
        console.error(error.response.data);
      } else {
        setErr("Network Error");
        console.error(error);
      }
    }
  }
useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      }, []);
  return (
    <body className="login-register-body">
      {loading && <Preloader loading={loading} />}
      <div className="container">
        <div className="rows hh-100">
          <form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1 className="textcenter">Login Now</h1>
              <div className="formcontrol">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email.."
                />
                <label htmlFor="email">Email:</label>
              </div>
              <div className="formcontrol">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Enter Your Password.."
                />
                <label htmlFor="password">Password:</label>
              </div>
              <div className="social-icons">
                <a href="{}" className="icon-social-media">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="{}" className="icon-social-media">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="{}" className="icon-social-media">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="{}" className="icon-social-media">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <button type="submit" className="button-login-register">
                Login
              </button>
              {err !== "" && (
                <span className="error-login-register">{err}</span>
              )}
              <div className="register-link">
                <p>
                  Not account yet? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
