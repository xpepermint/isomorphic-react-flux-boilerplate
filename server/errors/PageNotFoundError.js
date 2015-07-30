export default class PageNotFoundError extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || 'Page not found.';
    this.status = status || 404;
  }
}
