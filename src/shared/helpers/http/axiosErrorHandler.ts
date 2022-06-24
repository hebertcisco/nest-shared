import axios from 'axios';
import type { AxiosError } from 'axios';

export interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: 'axios-error' | 'stock-error';
}

export interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: 'axios-error';
}
export interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: 'stock-error';
}

export function axiosErrorHandler<T>(callback: (err: IAxiosError<T> | IStockError<T>) => void) {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error: error,
        type: 'axios-error',
      });
    } else {
      callback({
        error: error,
        type: 'stock-error',
      });
    }
  };
}
export default axiosErrorHandler;
