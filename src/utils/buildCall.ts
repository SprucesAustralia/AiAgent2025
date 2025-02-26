import { Call } from '../models/callResponse';

export const buildCall = (data: Partial<Call>): Call => {
  return {
    status: data.status || 'default-status',
    call_id: data.call_id || 'default-call-id',
    model_id: data.model_id || 'default-model-id',
    campaign_type: data.campaign_type || 'default-campaign-type',
    prompt_variables: data.prompt_variables || {'default-key': 'default-value'},
    phone_number_from: data.phone_number_from || 'default-phone-number-from',
    phone_number_to: data.phone_number_to || 'default-phone-number-to',
    name: data.name || 'default-name',
    transcript: data.transcript || 'default-transcript',
    duration: data.duration || 0,
    recording_url: data.recording_url || 'default-recording-url',
    end_call_reason: data.end_call_reason || 'default-end-call-reason',
    timezone: data.timezone || 'default-end_call_reason',
    start_time: data.start_time || 'default-end-call-reason',
    executed_actions: data.executed_actions || {'default-key': 'default-value'},

  };
};