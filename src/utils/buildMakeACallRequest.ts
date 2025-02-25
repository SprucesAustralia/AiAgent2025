import { MakeACallRequest } from '../models/makeACallRequest';

export const buildMakeACallRequest = (data: Partial<MakeACallRequest>): MakeACallRequest => {
  return {
    model_id: data.model_id || '1738741426507x677820573910445700',
    team_id: data.team_id,
    phone: data.phone || 'default-phone',
    name: data.name || 'default-name',
    custom_variables: data.custom_variables || [],
    lead_email: data.lead_email,
    lead_timezone: data.lead_timezone,
    prompt: data.prompt,
    greeting: data.greeting || 'Hello there,',
  };
};