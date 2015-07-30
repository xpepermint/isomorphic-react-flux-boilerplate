import express from 'express';
import controllers from './controllers';

let router = express.Router();

router.route('*')
  .get(controllers.render);

export default router;
