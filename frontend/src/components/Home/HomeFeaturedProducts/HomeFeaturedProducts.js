import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomeFeaturedProducts.css";
import { FeaturedProductItem } from "./index";

function HomeFeaturedProducts() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllProducts = async () => {
    try {
      const getAllProductsURL = `http://127.0.0.1:8000/api/product/`;
      const response = await axios.get(getAllProductsURL);
      setLoading(true);
      console.log(response);
      setData([...response.data]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div id="home-fProducts">
        <div className="home-fProducts-container">
          {data.slice(0, 8).map((item, index) => {
            return <FeaturedProductItem data={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default HomeFeaturedProducts;
