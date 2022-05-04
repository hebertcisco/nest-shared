import qs from 'qs';

export const parseQueryParams = (params: object): string => {
  return params ? `?${qs.stringify(params)}` : '';
};
export default parseQueryParams;
