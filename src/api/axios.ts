import axios from 'axios';

const createAxiosInstance = () => {
  return axios.create();
};

interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any;
  params?: any;
  headers?: any;
}

const axiosRequest = async (config: RequestConfig) => {
  const axiosInstance = createAxiosInstance();

  try {
    const response = await axiosInstance({
      ...config,
      headers: {
        'Content-Type': config.headers?.['Content-Type'] || 'application/json',
        ...config.headers,
      },
      timeout:5000,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosRequest;
