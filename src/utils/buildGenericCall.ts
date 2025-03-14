import { BoundedCalls } from '../models/callResponse';

export const buildGenericCall = (data: Partial<BoundedCalls>): BoundedCalls => {
  return {
    call_id: data.call_id || 'default-call-id',
    model_id: data.model_id || 'default-model-id',
    campaign_type: data.model_id === '1738741426507x677820573910445700' 
    ? "Outbound" 
    : data.model_id === '1738396481314x557318381134590600' 
      ? "Inbound" 
      : "default_campaign_type",
    phone_number_from: data.phone_number_from || 'default-phone-number-from',
    phone_number_to: data.phone_number_to || 'default-phone-number-to',
    name: data.name || 'default-name',
    transcript: data.transcript || 'default-transcript',
    duration: data.duration || 0,
    recording_url: data.recording_url || 'default-recording-url',
    end_call_reason: data.end_call_reason || 'default-end-call-reason',
  };
};