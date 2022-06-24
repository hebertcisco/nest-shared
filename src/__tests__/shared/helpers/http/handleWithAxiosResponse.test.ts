import { handleWithAxiosResponse } from '../../../..';
import axios from 'axios';

describe('handleWithAxiosResponse', () => {
  describe('handleWithAxiosResponse', () => {
    it('should return the repo result with 200 OK', async () => {
      const expect_result = {
        status: 200,
      };
      const response = await axios.get(`https://api.github.com/repos/hebertcisco/nest-shared`);
      expect(response.status).toBe(expect_result.status);
      const valid_response = await handleWithAxiosResponse(response);
      expect(String(valid_response?.name)).toBe('nest-shared');
    });
  });
});
