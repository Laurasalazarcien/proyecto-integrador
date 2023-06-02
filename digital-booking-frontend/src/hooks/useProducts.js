import { useState, useEffect } from "react";
import ProductsService from "../services/products";

const useProducts = ({ id, category } = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (category) {
        data = await ProductsService.getProductsByCategory(category);
      } else if (id) {
        data = await ProductsService.getProductById(id);
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

  const createProduct = (product) => {
    return ProductsService.createProduct(product);
  };

  const updateProduct = (product) => {
    return ProductsService.updateProduct(product);
  };

  const deleteProduct = (productId) => {
    return ProductsService.deleteProduct(productId);
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
