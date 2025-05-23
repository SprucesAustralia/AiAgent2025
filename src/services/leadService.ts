import { LeadRepository } from '../repositories/leadRepository';
import { Lead } from '../models/lead';
import { generateLeadNumber } from '../utils/generateLeadNumber';
import { CallService } from './callService';
import { LeadCallService } from './leadCallService';
import { MakeACallRequest } from '../models/makeACallRequest';
import { buildMakeACallRequest } from '../utils/buildMakeACallRequest';
import { buildLeadCall } from '../utils/buildLeadCall';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

export class LeadService {
  private leadRepository: LeadRepository;
  private callService: CallService;
  private leadCallService: LeadCallService;

  constructor() {
    this.leadRepository = new LeadRepository();
    this.callService = new CallService();
    this.leadCallService = new LeadCallService();
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
        address: newLead.address,
        lead_timezone: 'Australia/Brisbane',
        greeting: `Hi ${newLead.fullname}, leo here from Spruces, about your cleaning quote request, Do you have time now to finish the request?`,
      });
      const callResponse = await this.callService.makeACall(makeACallRequest);
      if (callResponse) {
        await this.leadCallService.createLeadCall(buildLeadCall({ lead_id: newLead.id, call_id: callResponse.response.call_id }));
      }
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