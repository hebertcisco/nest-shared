
import axios, { AxiosError } from 'axios';
import { axiosErrorHandler, IAxiosError, IStockError } from '../axiosErrorHandler';

describe('axiosErrorHandler', () => {
  it('should handle AxiosError', () => {
    const callback = jest.fn();
    const error = { isAxiosError: true, message: 'Axios error' } as AxiosError;
    
    // Mock isAxiosError to return true for this specific error object
    const isAxiosErrorSpy = jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);

    axiosErrorHandler(callback)(error);

    expect(callback).toHaveBeenCalledWith<[IAxiosError<unknown>]>({
      error,
      type: 'axios-error',
    });
    
    isAxiosErrorSpy.mockRestore();
  });

  it('should handle stock Error', () => {
    const callback = jest.fn();
    const error = new Error('Stock error');

    // Mock isAxiosError to return false for this error
    const isAxiosErrorSpy = jest.spyOn(axios, 'isAxiosError').mockReturnValue(false);

    axiosErrorHandler(callback)(error);

    expect(callback).toHaveBeenCalledWith<[IStockError<unknown>]>({
      error,
      type: 'stock-error',
    });
    
    isAxiosErrorSpy.mockRestore();
  });
});
