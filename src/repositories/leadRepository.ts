import supabase from '../clients/supabaseClient';
import { Lead } from '../models/lead';

export class LeadRepository {
  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead | null> {
    const { data, error } = await supabase
      .from('leads')
      .insert(lead)
      .single();

    if (error) {
      console.error('Error creating lead:', error);
      return null;
    }
    return data;
  }

  async getAllLeads(): Promise<Lead[] | null> {
    const { data, error } = await supabase
      .from('leads')
      .select('*');

    if (error) {
      console.error('Error fetching leads:', error);
      return null;
    }
    return data;
  }

  async getLeadById(id: number): Promise<Lead | null> {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching lead:', error);
      return null;
    }
    return data;
  }

  async updateLead(id: number, lead: Partial<Lead>): Promise<Lead | null> {
    const { data, error } = await supabase
      .from('leads')
      .update(lead)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error updating lead:', error);
      return null;
    }
    return data;
  }

  async deleteLead(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting lead:', error);
      return false;
    }
    return true;
  }
}