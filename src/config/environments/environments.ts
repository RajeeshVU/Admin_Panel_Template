interface Environments {
    apiUrl: string | undefined;
  }

  export const environments: Environments = {
    apiUrl:import.meta.env.VITE_API_URL_DEV,
  };