export default class UnhandledError extends Error {
  constructor(err, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = err.message || 'Unhandler error.';
    this.status = status || 500;
  }
}
