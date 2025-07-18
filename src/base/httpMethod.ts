const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
} as const;

export type HttpMethod = keyof typeof httpMethods;

export default httpMethods;
