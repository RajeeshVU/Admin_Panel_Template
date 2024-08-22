import axiosRequest from '../../api/axios';
import { environments } from '../../config/environments/environments';

export const appointmentApi = async (data: any) => {
  try {
    const response = await axiosRequest({
      data: data,
      url: `${environments.apiUrl}/appointments/add_appointment`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {;
    throw error; 
  }
};
export const UpdateAppointmentApi = async (data: any) => {
  console.log(data.data)
  try {
    const response = await axiosRequest({
      data: data.data,
      url: `${environments.apiUrl}/appointments/update_appointments/${data.id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {;
    throw error; 
  }
};

