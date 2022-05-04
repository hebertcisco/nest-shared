import { AxiosResponse } from 'axios';
import { HttpException } from '@nestjs/common';

export function isSuccessfulRequest(status: number) {
  return status >= 200 && status <= 399;
}
export const handleWithAxiosResponse = async (args: AxiosResponse<any, any>) => {
  const { data } = args;
  const { status } = args;

  if (isSuccessfulRequest(status)) {
    return data;
  }
  throw new HttpException(
    args.data || {
      statusCode: status,
      message: 'Something went wrong',
    },
    status,
  );
};
export default handleWithAxiosResponse;
