import React, { useEffect, useState } from "react";
import GOBack from "../../../../Components/GoBack_Btn/GoBack_Btn";
import "./ShowProducts.css";
import ThemeSwitcher from "../../../../Components/ThemeSwitcher/ThemeSwitcher";

export default function Passwd() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8080/api/pathTraversalLab1Product/etc/passwd")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <GOBack />
      <ThemeSwitcher />
      <div style={{ backgroundColor: "var(--primary-bg)", minHeight: "100vh" }}>
        <div className="page-container-pwd">
          <div className="content-area">
            <pre>{message}</pre>
            {message === ""}
            <p>No products available</p>
          </div>
        </div>
      </div>
    </>
  );
}
