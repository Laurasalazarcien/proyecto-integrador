import axios from "axios";
import config from "./config";

class CategoriesService {
  static async getAllCategories() {
    return axios.get(`${config.apiUrl}/products/categories`).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default CategoriesService;
