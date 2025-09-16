import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookie from "cookie-universal";
import "./form.css";
import "./register-login.css";
import Preloader from "../../Website/Preloader/Preloader";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const cookie = Cookie();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
      const res = await axios.post(
        "https://digitopia-project-backend.vercel.app/api/login",
        form
      );
      setLoading(false);
      const token = res.data.data.token;
      cookie.set("CuberWeb", token);
      // window.location.pathname = `/home`;
      navigate("/home");
    } catch (error) {
      setLoading(false);
      setLoading(false);
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data;

        if (status === 404 && message === "Not a user") {
          setErr("User does not exist");
        } else if (status === 401 && message === "Invalid name or password") {
          setErr("Wrong password");
        } else if (status === 401 && message === "User not verified") {
          setErr("Your account is not verified yet");
        } else {
          setErr("Something went wrong. Please try again.");
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
    <div className="login-register-body">
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
    </div>
  );
}
