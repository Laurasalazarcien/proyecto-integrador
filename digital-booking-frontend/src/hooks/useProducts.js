/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import ProductsService from "../services/products";
import { useApp } from "././../context/AppContext";

const useProducts = (category) => {
  const {
    data: products,
    loading,
    errors,
    setLoading,
    setErrors,
    setData,
  } = useApp();

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (category) {
        data = await ProductsService.getProductsByCategory(category);
      } else {
        data = await ProductsService.getAllProducts();
      }
      setData(data);
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
