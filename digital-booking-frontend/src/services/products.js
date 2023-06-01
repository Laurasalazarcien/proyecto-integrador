import axios from "axios";
import config from "./config";

class ProductsService {
  static getAllProducts() {
    return axios.get(`${config.apiUrl}/instruments`).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static getProductsByCategory(category) {
    return axios
      .get(`${config.apiUrl}/products/category/${category}`)
      .then((resp) => {
        const { data } = resp;
        return data;
      });
  }

  static createProduct(product) {
    return axios.post(`${config.apiUrl}/products`, product).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default ProductsService;
