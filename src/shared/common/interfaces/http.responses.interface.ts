export interface HttpResponse {
  success: boolean;
}
export interface HttpResponseError extends HttpResponse {
  error: string | object | object[];
}
