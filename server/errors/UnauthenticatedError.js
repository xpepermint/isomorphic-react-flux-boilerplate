export default class UnauthenticatedError extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || 'Authentication failed.';
    this.status = status || 401;
  }
}
