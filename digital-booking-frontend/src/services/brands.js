import axios from "axios";
import config from "./config";

class BrandsService {
  static async getAllCategories() {
    return axios.get(`${config.apiUrl}/brands`).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default BrandsService;
