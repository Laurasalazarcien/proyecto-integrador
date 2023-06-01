/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CategoriesService from "../services/categories";

const useCategories = ({ id } = {}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (id) {
        data = await CategoriesService.getCategoryById(id);
      } else {
        data = await CategoriesService.getAllCategories();
      }
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createCategory = () => {
    // TODO: Implements function
  };

  const updateCategory = (productId) => {
    // TODO: Implements function
  };

  const deleteCategory = (productId) => {
    // TODO: Implements function
  };

  return {
    categories,
    createCategory,
    updateCategory,
    deleteCategory,
    loading,
    errors,
  };
};

export default useCategories;
