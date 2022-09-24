export interface AppServiceInterface {
  name: string;
  version: string;
  status: string;
  date: Date;
  environment: string;
  aws: {
    region: string;
  };
}
export default AppServiceInterface;
