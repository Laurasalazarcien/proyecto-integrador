import axios from "axios";
import config from "./config";

class CategoriesService {
  static async getAllCategories() {
    return axios.get("categories", config).then((resp) => {
      const { data } = resp;
      console.log({ resp });
      return data;
    });
  }

  static async getCategoryById(categoryId) {
    return axios.get(`categories/${categoryId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async createCategory(category) {
    return axios.post(`categories`, category, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async editCategory(category) {
    return axios.put(`instruments`, category, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async deleteCategory(categoryId) {
    return axios.delete(`categories/${categoryId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default CategoriesService;
