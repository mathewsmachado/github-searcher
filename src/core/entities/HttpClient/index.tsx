import { ThrowsError } from 'types';

export class HttpClient {
  constructor(readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T | ThrowsError> {
    const response = await fetch(`${this.baseUrl}${path}`);

    if (!response.ok) {
      throw new Error(String(response.status));
    }

    return response.json();
  }
}
