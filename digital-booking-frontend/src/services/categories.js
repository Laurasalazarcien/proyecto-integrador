import axios from "axios";
import config from "./config";

class CategoriesService {
  static getAllCategories() {
    return axios.get("categories", config).then((resp) => {
      const { data } = resp;
      console.log({resp});
      return data;
    });
  }
}

export default CategoriesService;
