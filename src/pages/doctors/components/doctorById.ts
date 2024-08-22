import { useQuery } from "@tanstack/react-query";
import axiosRequest from "../../../api/axios";
import { environments } from "../../../config/environments/environments";
interface Pagination{
  pageIndex:number;
  pageSize:number
}
const fetchDoctorList = async (id:number) => {
 
  try {
    const response = await axiosRequest({
      url: `${environments.apiUrl}/doctor/doctor_list/${id}`,
      method: "GET",
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useDoctorById = (id:any) => {
  return useQuery({
    queryKey: ["doctorList", id],
    queryFn: () => fetchDoctorList(id),
    enabled: true,
    retry: 1,
    
  });
};
