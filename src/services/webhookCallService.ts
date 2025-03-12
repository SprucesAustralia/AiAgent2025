import { postZapierData } from '../clients/zapierClient';
import { Call, WebhookCall } from '../models/callResponse';
import { WebhookCallRepository } from '../repositories/webhookCallRepository';
import { buildCall } from '../utils/buildCall';

export class WebhookCallService {
  private webhookCallRepository: WebhookCallRepository;
  constructor() {
    this.webhookCallRepository = new WebhookCallRepository();
  }

  async createWebhookCall(webhookCall: Omit<WebhookCall, 'id'>): Promise<Call | null> {
    // Ignore +1123456789 number as it's the check webhook call to our webhook receiver from Synthflow
    if (webhookCall.lead.phone_number === '+1123456789') {
      return null;
    }
    // Send the webhook call data to Zapier
    await postZapierData('', webhookCall)
    const newWebhookCall: Call = buildCall({
      status: webhookCall.status,
      call_id: webhookCall.call.call_id,
      model_id: webhookCall.call.model_id,
      prompt_variables: webhookCall.lead.prompt_variables,
      phone_number_to: webhookCall.lead.phone_number,
      name: webhookCall.lead.name,
      transcript: webhookCall.call.transcript,
      duration: webhookCall.call.duration,
      recording_url: webhookCall.call.recording_url,
      end_call_reason: webhookCall.call.end_call_reason,
      timezone: webhookCall.call.timezone,
      start_time: webhookCall.call.start_time,
      executed_actions: webhookCall.executed_actions
    });
    return await this.webhookCallRepository.createWebhookCall(newWebhookCall);
  }
}
