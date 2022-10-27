import { Router } from 'express';
import * as rodsController from '../controllers/RodsController';

const rodsRouter = Router();

// GET /rods/
rodsRouter.get('/', rodsController.index);

// GET /rods/welcome
rodsRouter.get('/welcome', rodsController.getWelcome);

export default rodsRouter;