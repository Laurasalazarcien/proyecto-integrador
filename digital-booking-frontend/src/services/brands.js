import axios from "axios";
import config from "./config";

class BrandsService {
  static async getAllBrands() {
    return axios.get("brands", config).then((resp) => {
      const { data } = resp;
      console.log({ resp });
      return data;
    });
  }

  static async getBrandById(brandId) {
    return axios.get(`brands/${brandId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async createBrand(brand) {
    return axios.post(`brands`, brand, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async editBrand(brand) {
    return axios.put(`brands`, brand, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async deleteBrand(brandId) {
    return axios.delete(`brands/${brandId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default BrandsService;
