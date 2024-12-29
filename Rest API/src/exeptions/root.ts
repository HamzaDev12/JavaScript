export class exceptionst extends Error {
  message: string;
  codeError: codeError;
  statusCode: number;
  errors: any;

  constructor(
    message: string,
    coderError: codeError,
    statusCode: number,
    errors: any
  ) {
    super(message),
      (this.message = message),
      (this.codeError = coderError),
      (this.errors = errors),
      (this.statusCode = statusCode);
  }
}

export enum codeError {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORECT_PASSWORD = 1003,
  INCORECT_EMAIL = 1004,
}
