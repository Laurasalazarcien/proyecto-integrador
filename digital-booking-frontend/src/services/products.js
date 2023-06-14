import axios from "axios";
import config from "./config";

class ProductsService {
  static async getAllProducts() {
    return axios.get(`instruments`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async getProductById(productId) {
    return axios.get(`instruments/${productId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async getProductsByCategory(category) {
    return axios
      .get(`instruments/category/${category}`, config)
      .then((resp) => {
        const { data } = resp;
        return data;
      });
  }

  static async createProduct(product) {
    return axios.post(`instruments`, product, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async updateProduct(product) {
    return axios.put(`instruments`, product, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async deleteProduct(productId) {
    return axios.delete(`instruments/${productId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default ProductsService;
