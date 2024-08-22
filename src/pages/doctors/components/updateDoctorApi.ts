import axiosRequest from "../../../api/axios";
import { environments } from "../../../config/environments/environments";

export const updateDoctorApi = async (data: any) => {
console.log(data)
  try {
    const response = await axiosRequest({
      data: data.data,
      url: `${environments.apiUrl}/doctor/update_doctor/${data.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
