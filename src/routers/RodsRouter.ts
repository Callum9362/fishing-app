import { Router } from 'express';
import * as rodsController from '../controllers/RodsController';

const rodsRouter = Router();

// GET /rods/
rodsRouter.get('/', rodsController.index);

// GET /rods/price
// Note the :id this is how you add a route param
rodsRouter.get('/price:id', rodsController.getRodPrice);

export default rodsRouter;