import PageNotFoundError from '../errors/PageNotFoundError';
import UnauthenticatedError from '../errors/UnauthenticatedError';
import UnhandledError from '../errors/UnhandledError';

export default function errorHandler(err, req, res, next) {
  let status;

  if (err instanceof PageNotFoundError) {
  } else if (err instanceof UnauthenticatedError) {
    res.redirect('/login');
  } else {
    console.log(err);
    err = new UnhandledError(err);
  }

  return res.status(err.status).send(err);
};
