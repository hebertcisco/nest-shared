import { HttpException } from '@nestjs/common';
import type { AxiosResponse } from 'axios';

export function isSuccessfulRequest(status: number) {
  return status >= 200 && status <= 399;
}
export const handleWithAxiosResponse = async <AxiosResult>(args: AxiosResponse<AxiosResult>) => {
  const { data } = args;
  const { status } = args;

  if (isSuccessfulRequest(status)) {
    return data as AxiosResult;
  }
  return Promise.reject(
    new HttpException(
      args.data || {
        statusCode: status,
        message: 'Something went wrong',
      },
      status,
    ),
  );
};
export default handleWithAxiosResponse;
