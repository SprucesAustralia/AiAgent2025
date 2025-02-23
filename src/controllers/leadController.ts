import { LeadService } from '../services/leadService';
import { Lead } from '../models/lead';
import { Request, Response } from 'express';

export class LeadController {
  private leadService: LeadService;

  constructor() {
    this.leadService = new LeadService();
  }

  async createLead(req: Request, res: Response): Promise<void> {
    const lead: Omit<Lead, 'id'> = req.body;
    const createdLead = await this.leadService.createLead(lead);
    if (createdLead) {
      res.status(201).json(createdLead);
    } else {
      res.status(500).json({ error: 'Failed to create lead' });
    }
  }

  async getAllLeads(req: Request, res: Response): Promise<void> {
    const leads = await this.leadService.getAllLeads();
    if (leads) {
      res.status(200).json(leads);
    } else {
      res.status(500).json({ error: 'Failed to fetch leads' });
    }
  }

  async getLeadById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const lead = await this.leadService.getLeadById(id);
    if (lead) {
      res.status(200).json(lead);
    } else {
      res.status(404).json({ error: 'Lead not found' });
    }
  }

  async updateLead(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const lead: Partial<Lead> = req.body;
    const updatedLead = await this.leadService.updateLead(id, lead);
    if (updatedLead) {
      res.status(200).json(updatedLead);
    } else {
      res.status(500).json({ error: 'Failed to update lead' });
    }
  }

  async deleteLead(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const success = await this.leadService.deleteLead(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(500).json({ error: 'Failed to delete lead' });
    }
  }
}