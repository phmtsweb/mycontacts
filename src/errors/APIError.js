export class APIError extends Error {
  constructor(body, response) {
    super(body?.error || `${response.status} - ${response.statusText}`);
    this.name = 'APIError';
    this.response = response;
    this.body = body;
  }
}
