import { Router } from 'express';
import { validateRequest } from '../middlewares/validate-request';
import { createOrder } from '../controllers/order.controller';
import { protect } from '../middlewares/auth';
import { body } from 'express-validator';
const router = Router();

router.post(
  '/',
  body('userId').isNumeric().notEmpty(),
  body('shippingDetails').isObject().notEmpty(),
  body('items').isArray().notEmpty(),
  body('shippingPrice').isNumeric().notEmpty(),
  body('subtotal').isNumeric().notEmpty(),
  body('total').isNumeric().notEmpty(),
  validateRequest,
  protect,
  createOrder
);

export default router;
