import { LeadCallService } from '../services/leadCallService';
import { LeadCall } from '../models/leadCall';
import { Request, Response } from 'express';

export class LeadCallController {
  private leadCallService: LeadCallService;

  constructor() {
    this.leadCallService = new LeadCallService();
  }

  async createLeadCall(req: Request, res: Response): Promise<void> {
    const leadCall: Omit<LeadCall, 'id'> = req.body;
    const createdLeadCall = await this.leadCallService.createLeadCall(leadCall);
    if (createdLeadCall) {
      res.status(201).json(createdLeadCall);
    } else {
      res.status(500).json({ error: 'Failed to create lead Call' });
    }
  }

  async getAllLeadCalls(req: Request, res: Response): Promise<void> {
    const leadCalls = await this.leadCallService.getAllLeadCalls();
    if (leadCalls) {
      res.status(200).json(leadCalls);
    } else {
      res.status(500).json({ error: 'Failed to fetch lead Calls' });
    }
  }

  async getLeadCallById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const lead = await this.leadCallService.getLeadCallById(id);
    if (lead) {
      res.status(200).json(lead);
    } else {
      res.status(404).json({ error: 'Lead Call not found' });
    }
  }

  async getLeadCallByLeadId(req: Request, res: Response): Promise<void> {
    const leadId = parseInt(req.params.leadId, 10);
    const leadCall = await this.leadCallService.getLeadCallByLeadId(leadId);
    if (leadCall) {
      res.status(200).json(leadCall);
    } else {
      res.status(404).json({ error: 'Lead Call not found' });
    }
  }

  async getLeadCallByCallId(req: Request, res: Response): Promise<void> {
    const callId = req.params.callId;
    const leadCall = await this.leadCallService.getLeadCallByCallId(callId);
    if (leadCall) {
      res.status(200).json(leadCall);
    } else {
      res.status(404).json({ error: 'Lead Call not found' });
    }
  }
}