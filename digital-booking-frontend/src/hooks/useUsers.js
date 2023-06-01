/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import UsersService from "../services/users";

const useUsers = ({ id } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (id) {
        data = await UsersService.getProductById(id);
      } else {
        data = await UsersService.getAllProducts();
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
