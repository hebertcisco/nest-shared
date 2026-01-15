
import { HttpException } from '@nestjs/common';
import { handleWithAxiosResponse } from '../handleWithAxiosResponse';

describe('handleWithAxiosResponse', () => {
  it('should return data on successful request', async () => {
    const response = {
      data: { message: 'Success' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { headers: {} as any },
    };
    await expect(handleWithAxiosResponse(response)).resolves.toEqual({ message: 'Success' });
  });

  it('should reject with HttpException on failed request', async () => {
    const response = {
      data: { message: 'Error' },
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: { headers: {} as any },
    };
    await expect(handleWithAxiosResponse(response)).rejects.toThrow(HttpException);
  });

  it('should use default error message if none is provided', async () => {
    const response = {
      data: null,
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: { headers: {} as any },
    };
    try {
      await handleWithAxiosResponse(response);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      if (error instanceof HttpException) {
        expect(error.getResponse()).toEqual({
          statusCode: 500,
          message: 'Something went wrong',
        });
      }
    }
  });
});
