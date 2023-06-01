/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BrandsService from "../services/brands";

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await BrandsService.getAllCategories();
      setBrands(data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createBrand = () => {
    // TODO: Implements function
  };

  const updateBrand = (brandtId) => {
    // TODO: Implements function
  };

  const deleteBrand = (brandtId) => {
    // TODO: Implements function
  };

  return {
    brands,
    createBrand,
    updateBrand,
    deleteBrand,
    loading,
    errors,
  };
};

export default useBrands;
