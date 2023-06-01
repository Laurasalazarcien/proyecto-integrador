import axios from "axios";
import config from "./config";

class ProductsService {
  static async getAllProducts() {
    return axios.get(`${config.apiUrl}/instruments`).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async getProductsByCategory(category) {
    return axios
      .get(`${config.apiUrl}/products/category/${category}`)
      .then((resp) => {
        const { data } = resp;
        return data;
      });
  }
}

export default ProductsService;
