export class RequestError extends Error {

  constructor(
    message: string,
    public code: number
  ) {
    super(message);
    this.name = 'RequestError';
  }

  public static fromFetchResponse(response: Response | any): RequestError {
    if (response.status === 401) {
      return new RequestError('Login failed', 401);
    }
    if (response.status === 404) {
      return new RequestError('Not Found', 404);
    }
    if (response.status === 500) {
      return new RequestError('internal server error', 500);
    }
    return new RequestError('Unexpected error', 0);
  }

  public static fromErrorCode(code: number): RequestError {
    switch (code) {
      case 401: {
        return new RequestError('not authorized', 401);
      }
      case 404: {
        return new RequestError('not found', 404);
      }
      case 408: {
        return new RequestError('request timeout', 408);
      }
      case 500: {
        return new RequestError('internal server error', 500);
      }
    }
    return new RequestError('unexpected error', 0);
  }

  public isClientError = () => false;

}
