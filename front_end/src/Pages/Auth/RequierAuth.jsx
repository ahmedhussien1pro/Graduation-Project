import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import Error403 from "./Page-403/403";
import axios from "axios";
import Preloader from "../Website/Preloader/Preloader";
export default function RequierAuth({ allowedRole }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
   useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const res = await axios.get("http://127.0.0.1:8080/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data.data);
        } catch (error) {
          console.error(error);
          navigate("/login", { replace: true });
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/login", { replace: true });
        setLoading(false);
      }
    };
    fetchUserData();
  }, [token, navigate]);
  if (loading) {
    return <Preloader loading={loading} />;
  }
  return user ? (
    allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Error403 role={user.role} />
    )
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
