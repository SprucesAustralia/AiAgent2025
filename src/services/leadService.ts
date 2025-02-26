import { LeadRepository } from '../repositories/leadRepository';
import { Lead } from '../models/lead';
import { generateLeadNumber } from '../utils/generateLeadNumber';
import { CallService } from './callService';
import { MakeACallRequest } from '../models/makeACallRequest';
import { buildMakeACallRequest } from '../utils/buildMakeACallRequest';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

export class LeadService {
  private leadRepository: LeadRepository;
  private callService: CallService

  constructor() {
    this.leadRepository = new LeadRepository();
    this.callService = new CallService();
  }

  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead | null> {
    const leadWithId = {
      ...lead,
      phone: formatPhoneNumber(lead.phone),
      leadNumber: generateLeadNumber()
    };
    const newLead = await this.leadRepository.createLead(leadWithId);

    if (newLead != null) {
      const makeACallRequest: MakeACallRequest = buildMakeACallRequest({
        phone: newLead.phone,
        name: newLead.fullname,
        lead_email: newLead.email,
        lead_timezone: 'Australia/Brisbane',
        greeting: `Hello ${newLead.fullname}, I am calling from Spruces cleaning! 
        I've seen you complete our form on the website about ${newLead.typeOfService} services. 
        Do you have a couple of minutes to finish the request?`,
      });
      const callResponse = await this.callService.makeACall(makeACallRequest);
      console.log(callResponse);
      // Store call response in the lead_call table
    }
    return newLead
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