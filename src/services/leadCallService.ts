import { LeadCallRepository } from '../repositories/leadCallRepository';
import { LeadCall } from '../models/leadCall';

export class LeadCallService {
  private leadCallRepository: LeadCallRepository;

  constructor() {
    this.leadCallRepository = new LeadCallRepository();
  }

  async createLeadCall(leadCall: Omit<LeadCall, 'id'>): Promise<LeadCall | null> {
    return await this.leadCallRepository.createLeadCall(leadCall);
  }

  async getAllLeadCalls(): Promise<LeadCall[] | null> {
    return await this.leadCallRepository.getAllLeadCalls();
  }

  async getLeadCallById(id: number): Promise<LeadCall | null> {
    return await this.leadCallRepository.getLeadCallById(id);
  }

  async getLeadCallByLeadId(leadId: number): Promise<LeadCall | null> {
    return await this.leadCallRepository.getLeadCallByLeadId(leadId);
  }

  async getLeadCallByCallId(callId: string): Promise<LeadCall | null> {
    return await this.leadCallRepository.getLeadCallByCallId(callId);
  }
}