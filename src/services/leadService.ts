import { LeadRepository } from '../repositories/leadRepository';
import { Lead } from '../models/lead';
import { generateLeadNumber } from '../utils/generateLeadNumber';

export class LeadService {
  private leadRepository: LeadRepository;

  constructor() {
    this.leadRepository = new LeadRepository();
  }

  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead | null> {
    const leadWithId = {
      ...lead,
      leadNumber: generateLeadNumber()
    };
    return await this.leadRepository.createLead(leadWithId);
  }

  async getAllLeads(): Promise<Lead[] | null> {
    return await this.leadRepository.getAllLeads();
  }

  async getLeadById(id: number): Promise<Lead | null> {
    return await this.leadRepository.getLeadById(id);
  }

  async getLeadByLeadNumber(leadNumber: string): Promise<Lead | null> {
    return await this.leadRepository.getLeadByLeadNumber(leadNumber);
  }

  async updateLead(id: number, lead: Partial<Lead>): Promise<Lead | null> {
    return await this.leadRepository.updateLead(id, lead);
  }

  async deleteLead(id: number): Promise<boolean> {
    return await this.leadRepository.deleteLead(id);
  }
}