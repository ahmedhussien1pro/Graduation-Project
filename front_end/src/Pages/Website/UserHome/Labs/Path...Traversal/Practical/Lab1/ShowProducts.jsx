import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import GOBack from "../../../../Components/GoBack_Btn/GoBack_Btn";
import "./ShowProducts.css";
import ThemeSwitcher from "../../../../Components/ThemeSwitcher/ThemeSwitcher";

export default function ShowProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id === "../../etc/passwd") {
      navigate(
        "/Path__Traversal/Path_Traversal_Labs/lab1/Show_Products/etc/passwd"
      );
      return;
    }

    axios
      .get(`http://127.0.0.1:8080/api/pathTraversalLab1Product/${id}`)
      .then((response) => {
        if (response.data.message === "product found") {
          setProduct(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id, navigate]);

  if (!product) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <>
      <GOBack />
      <ThemeSwitcher />

      <div style={{ backgroundColor: "var(--primary-bg)", minHeight: "100vh" }}>
        <div className="product-container">
          <img
            src={`http://127.0.0.1:8080/${product.path}`}
            alt={product.name}
            className="product-image"
          />
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  );
}
