import supabase from '../clients/supabaseClient';
import { LeadCall } from '../models/leadCall';

export class LeadCallRepository {
  async createLeadCall(leadCall: Omit<LeadCall, 'id'>): Promise<LeadCall | null> {
    const { data, error } = await supabase
      .from('lead_call')
      .insert(leadCall)
      .select()
      .single();

    if (error) {
      console.error('Error creating lead call:', error);
      return null;
    }
    return data;
  }

  async getAllLeadCalls(): Promise<LeadCall[] | null> {
    const { data, error } = await supabase
      .from('lead_call')
      .select('*');

    if (error) {
      console.error('Error fetching lead calls:', error);
      return null;
    }
    return data;
  }

  async getLeadCallById(id: number): Promise<LeadCall | null> {
    const { data, error } = await supabase
      .from('lead_call')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching lead call:', error);
      return null;
    }
    return data;
  }

  async getLeadCallByLeadId(leadId: number): Promise<LeadCall | null> {
    const { data, error } = await supabase
      .from('lead_call')
      .select('*')
      .eq('lead_id', leadId)
      .single();

    if (error) {
      console.error('Error fetching lead call:', error);
      return null;
    }
    return data;
  }

  async getLeadCallByCallId(callId: string): Promise<LeadCall | null> {
    const { data, error } = await supabase
      .from('lead_call')
      .select('*')
      .eq('call_id', callId)
      .single();

    if (error) {
      console.error('Error fetching lead call:', error);
      return null;
    }
    return data;
  }
}