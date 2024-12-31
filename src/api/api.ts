import axios, { AxiosRequestConfig } from 'axios';

interface ApiRequestOption extends AxiosRequestConfig {
  token?: string | null;
}

export const apiResponse = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  data?: any,
  options: ApiRequestOption = {}
) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
  const contentType =
    method === 'PATCH' ? 'application/json-patch+json' : 'application/json';
  const headers = {
    Authorization: `Bearer ${options.token || ''}`,
    'Content-Type': contentType,
    ...options.headers,
  };

  const config: AxiosRequestConfig = {
    method,
    url,
    headers,
    data,
    ...options,
  };

  try {
    const resp = await axios(config);
    return resp.data;
  } catch (error: any) {
    // Add detailed logging
    console.error('Error Response:', error.response);
    console.error('Error Message:', error.message);

    // Extract error details properly
    const errorDetails =
      error.response?.data?.details ||
      error.response?.data?.message ||
      error.message;
    throw new Error(
      errorDetails || `Internal Server Error while fetching ${endpoint}`
    );
  }
};
