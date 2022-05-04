import { HttpService } from '@nestjs/axios';
import { lastValueFrom, Observable } from 'rxjs';
import { handleWithAxiosResponse } from '../../../../src';
import type { AxiosResponse } from 'axios';

describe('handleWithAxiosResponse', () => {
  let httpService: HttpService;

  beforeEach(() => {
    httpService = new HttpService();
  });

  describe('handleWithAxiosResponse', () => {
    it('should return the repo result with 200 OK', async () => {
      const expect_result = {
        status: 200,
      };
      const result: Observable<AxiosResponse<any>> = httpService.get(
        `https://api.github.com/repos/hebertcisco/nest-shared`,
      );
      const response: AxiosResponse<any> = await lastValueFrom(result);
      expect(response.status).toBe(expect_result.status);
      const valid_response = await handleWithAxiosResponse(response);
      expect(String(valid_response?.name)).toBe('nest-shared');
    });
  });
});
