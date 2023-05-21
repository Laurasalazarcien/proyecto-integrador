import axios from "axios";
import config from "./config";

class ProductsService {
  static async getAllProducts() {
    return axios.get(`${config.apiUrl}/products`).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default ProductsService;
