import { LeadCall } from '../models/leadCall';

export const buildLeadCall = (data: Partial<LeadCall>): LeadCall => {
  return {
    lead_id: data.lead_id || 0,
    call_id: data.call_id || 'default-call-id',
  };
};