import express from 'express';
import { getPortfolioData, submitMessage } from '../controllers/portfolioController.js';

const router = express.Router();

router.route('/portfolio').get(getPortfolioData);
router.route('/messages').post(submitMessage);

export default router;
