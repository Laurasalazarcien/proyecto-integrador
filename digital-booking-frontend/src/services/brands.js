import axios from "axios";
import config from "./config";

class BrandsService {
  static async getAllCategories() {
    return axios.get("brands", config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default BrandsService;
