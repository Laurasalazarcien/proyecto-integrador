/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ProductsService from "../services/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await ProductsService.getAllProducts();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createProduct = () => {
    // TODO: Implements function
  };

  const updateProduct = (productId) => {
    // TODO: Implements function
  };

  const deleteProduct = (productId) => {
    // TODO: Implements function
  };

  return {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
    loading,
    errors,
  };
};

export default useProducts;
