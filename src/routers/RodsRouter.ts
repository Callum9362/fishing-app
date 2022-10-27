import { Router } from 'express';
import * as rodsController from '../controllers/RodsController';

const rodsRouter = Router();

// GET /rods/
rodsRouter.get('/', rodsController.index);

// GET /rods/welcome
rodsRouter.get('/price', rodsController.getRodPrice);

export default rodsRouter;