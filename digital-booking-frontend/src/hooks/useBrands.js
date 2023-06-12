/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import BrandsService from "../services/brands";

const useBrands = ({ id } = {}) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (id) {
        data = await BrandsService.getBrandById(id);
      } else {
        data = await BrandsService.getAllBrands();
      }
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

  const createBrand = (brand) => {
    return BrandsService.createBrand(brand);
  };

  const updateBrand = (brand) => {
    return BrandsService.updateBrand(brand);
  };

  const deleteBrand = (brandtId) => {
    return BrandsService.deleteBrand(brandtId);
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
