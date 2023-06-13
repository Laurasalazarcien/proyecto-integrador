import { useState, useEffect } from "react";
import StatusService from "../services/status";

const useStatus = ({ id } = {}) => {
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = [];
      if (id) {
        data = await StatusService.getStatusById(id);
      } else {
        data = await StatusService.getAllStatus();
      }
      setStatus(data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createStatus = (status) => {
    return StatusService.createStatus(status);
  };

  const updateStatus = (status) => {
    return StatusService.updateStatus(status);
  };

  const deleteStatus = (statusId) => {
    return StatusService.deleteStatus(statusId);
  };

  return {
    status,
    setStatus,
    createStatus,
    updateStatus,
    deleteStatus,
    loading,
    errors,
  };
};

export default useStatus;
