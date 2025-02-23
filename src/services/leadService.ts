import { LeadRepository } from '../repositories/leadRepository';
import { Lead } from '../models/lead';

export class LeadService {
  private leadRepository: LeadRepository;

  constructor() {
    this.leadRepository = new LeadRepository();
  }

  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead | null> {
    return await this.leadRepository.createLead(lead);
  }

  async getAllLeads(): Promise<Lead[] | null> {
    return await this.leadRepository.getAllLeads();
  }

  async getLeadById(id: number): Promise<Lead | null> {
    return await this.leadRepository.getLeadById(id);
  }

  async updateLead(id: number, lead: Partial<Lead>): Promise<Lead | null> {
    return await this.leadRepository.updateLead(id, lead);
  }

  async deleteLead(id: number): Promise<boolean> {
    return await this.leadRepository.deleteLead(id);
  }
}