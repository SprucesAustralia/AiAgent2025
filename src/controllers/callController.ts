import { Request, Response } from 'express';
import { CallService } from '../services/callService';
import { WebhookCall } from '../models/callResponse';

export class CallController {
  private callService: CallService;

  constructor() {
    this.callService = new CallService();
  }

  async createCall(req: Request, res: Response): Promise<void> {
    const leadCall: Omit<WebhookCall, 'id'> = req.body;
    const createdCall = await this.callService.createCall(leadCall);
    if (createdCall) {
      res.status(201).json(createdCall);
    } else {
      res.status(500).json({ error: 'Failed to create lead Call' });
    }
  }

  async getCallById(req: Request, res: Response): Promise<void> {
    const call = await this.callService.getCallById(req.params.id);
    if (call) {
      res.status(200).json(call);
    } else {
      res.status(500).json({ error: 'Failed to fetch calls' });
    }
  }

  async getAllCalls(req: Request, res: Response): Promise<void> {
    // Access query parameters
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20; // Default to 20 if not provided
    const offset = req.query.offset || 0; // Default to 0 if not provided
    const model_id = req.query.model_id
    const calls = await this.callService.getAllCalls({limit, offset, model_id});
    if (calls) {
      res.status(200).json(calls);
    } else {
      res.status(500).json({ error: 'Failed to fetch calls' });
    }
  }
}