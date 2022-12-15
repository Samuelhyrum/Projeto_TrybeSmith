import { Router } from 'express';
import ProductController from '../controllers/produsts.controller';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);

export default router;