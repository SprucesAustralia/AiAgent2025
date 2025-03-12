import { Request, Response } from 'express';
import { WebhookCallService } from '../services/webhookCallService';
import { WebhookCall } from '../models/callResponse';

export class WebhookCallController {
  private webhookCallService: WebhookCallService;

  constructor() {
    this.webhookCallService = new WebhookCallService();
  }

  async createWebhookCall(req: Request, res: Response): Promise<void> {
    const webhookCall: Omit<WebhookCall, 'id'> = req.body;
    const createdWebhookCall = await this.webhookCallService.createWebhookCall(webhookCall);
    if (createdWebhookCall) {
      res.status(201).json(createdWebhookCall);
    } else {
      res.status(500).json({ error: 'Failed to create webhook call' });
    }
  }
}