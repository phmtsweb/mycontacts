import { APIError } from '../../errors/APIError';

export class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type').split(';');
    if (contentType.includes('application/json')) { body = await response.json(); }

    if (response.ok) {
      return body;
    }

    throw new APIError(body, response);
  }

  async post(path, { data, headers }) {
    const response = await fetch(`${this.baseURL}${path}`, { data, headers });
    return response.json();
  }
}
