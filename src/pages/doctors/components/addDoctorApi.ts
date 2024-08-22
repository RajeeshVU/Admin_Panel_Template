import axiosRequest from "../../../api/axios";
import { environments } from "../../../config/environments/environments";

export const addDoctorApi = async (data: any) => {
  
  try {
    const response = await axiosRequest({
      data: data,
      url: `${environments.apiUrl}/doctor/add_doctor`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
