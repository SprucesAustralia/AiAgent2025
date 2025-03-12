import express from 'express';
import { WebhookCallController } from '../controllers/webhookCallController';

const router = express.Router();
const webhookCallController = new WebhookCallController();

router.post('/webhookCalls', (req, res) => webhookCallController.createWebhookCall(req, res));

export default router;