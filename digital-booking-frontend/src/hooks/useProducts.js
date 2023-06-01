/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ProductsService from "../services/products";
import { useApp } from "././../context/AppContext";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (category) {
        data = await ProductsService.getProductsByCategory(category);
      } else {
        data = await ProductsService.getAllProducts();
      }
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createProduct = async (product) => {
    setLoading(true);
    try {
      const resp = await ProductsService.createProduct(product);
      console.log("POST response");
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  const updateProduct = (productId) => {
    // TODO: Implements function
  };

  const deleteProduct = (productId) => {
    // TODO: Implements function
  };

  return {
    products,
    setProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    loading,
    errors,
  };
};

export default useProducts;
