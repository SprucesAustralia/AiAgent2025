import { Request, Response } from 'express';
import { AssistantService } from '../services/assistantService';

export class AssistantController {
  private assistantService: AssistantService;

  constructor() {
    this.assistantService = new AssistantService();
  }

  async getAllAssistants(req: Request, res: Response): Promise<void> {
    // Access query parameters
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20; // Default to 20 if not provided
    const offset = req.query.offset || 0; // Default to 0 if not provided
    const assistants = await this.assistantService.getAllAssistants({limit, offset});
    if (assistants) {
      res.status(200).json(assistants);
    } else {
      res.status(500).json({ error: 'Failed to fetch assistants' });
    }
  }
}