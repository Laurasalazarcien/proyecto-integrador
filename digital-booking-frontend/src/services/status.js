import axios from "axios";
import config from "./config";

class StatusService {
  static async getAllStatus() {
    return axios.get("status", config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async getStatusById(statusId) {
    return axios.get(`status/${statusId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async createStatus(status) {
    return axios.post(`status`, status, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async updateStatus(status) {
    return axios.put(`status`, status, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }

  static async deleteStatus(statusId) {
    return axios.delete(`status/${statusId}`, config).then((resp) => {
      const { data } = resp;
      return data;
    });
  }
}

export default StatusService;
