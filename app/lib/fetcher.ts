
interface ApiResponse<T = object> {
  status?: number;
  message?: string;
  data?: T;
}

export class ApiError extends Error {
  status: number;
  isFake200?: boolean;
  isHttpError?: boolean;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}



export const globalFetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const response = await fetch(...args);
  const data: ApiResponse<T> = await response.json();

  if (response.ok && data.status && data.status >= 400) {
    const error = new ApiError(data.message || 'API returned a soft error', data.status);
    error.isFake200 = true;
    throw error;
  }

  if (!response.ok) {
    const error = new ApiError(data.message || 'An HTTP error occurred', response.status);
    error.isHttpError = true;
    throw error;
  }

  return data as unknown as T; 
};