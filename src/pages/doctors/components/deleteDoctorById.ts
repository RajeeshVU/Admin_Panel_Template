
import axiosRequest from "../../../api/axios";
import { environments } from "../../../config/environments/environments";

export const removeDoctorApi = async (id:number) => {
    try {
      const response = await axiosRequest({
        url: `${environments.apiUrl}/doctor/remove_doctor/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {;
      throw error; 
    }
  };
  