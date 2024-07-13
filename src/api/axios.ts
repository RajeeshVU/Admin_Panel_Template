import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  contentType?: string; 
  data?: any; 
}

const useAxios = (config: ApiRequest) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios({
          method: config.method,
          url: config.url,
          headers: config.contentType ? { 'Content-Type': config.contentType } : {},
          data: config.data,
          timeout:5000,
        });
        setResponse(data);
      } catch (error) {
        setError(error);

      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [config]);

  return { response, error, isLoading };
};

export default useAxios;
