import PageNotFoundError from '../errors/PageNotFoundError';

export default function(req, res, next) {
  next(new PageNotFoundError());
};
