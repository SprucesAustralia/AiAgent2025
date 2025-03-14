import { postZapierData } from '../clients/zapierClient';
import { BoundedCalls, Call, WebhookCall } from '../models/callResponse';
import { CallRepository } from '../repositories/callRepository';
import { WebhookCallRepository } from '../repositories/webhookCallRepository';
import { buildCall } from '../utils/buildCall';
import { buildGenericCall } from '../utils/buildGenericCall';

export class WebhookCallService {
  private webhookCallRepository: WebhookCallRepository;
  private callRepository: CallRepository;
  private assistantLookup: Map<string, string>;
  constructor() {
    this.webhookCallRepository = new WebhookCallRepository();
    this.callRepository = new CallRepository();
    this.assistantLookup = new Map<string, string>;
    this.assistantLookup.set('1738741426507x677820573910445700', 'OUTBOUND_CALL');
    this.assistantLookup.set('1738396481314x557318381134590600', 'INBOUND_CALL');
  }

  async createWebhookCall(webhookCall: Omit<WebhookCall, 'id'>): Promise<Call | null> {
    // Ignore +1123456789 number as it's the check webhook call to our webhook receiver from Synthflow
    if (webhookCall.lead.phone_number === '+1123456789') {
      return null;
    }
    // Send the webhook call data to Zapier
    //removed awaiting for zapier
    postZapierData('', webhookCall)
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
    
    //since the data is similar on inbound_call and outbound_call, created a generic data for both.
    const genericCall: BoundedCalls = buildGenericCall({
      call_id: webhookCall.call.call_id,
      model_id: webhookCall.call.model_id,
      phone_number_to: webhookCall.lead.phone_number,
      phone_number_from: webhookCall.call.phone_number_from,
      name: webhookCall.lead.name,
      transcript: webhookCall.call.transcript,
      duration: webhookCall.call.duration,
      recording_url: webhookCall.call.recording_url,
      end_call_reason: webhookCall.call.end_call_reason,
    })
    const assistantType = this.assistantLookup.get(webhookCall.call.model_id);
    assistantType === 'INBOUND_CALL' ? this.callRepository.createInboundCall(genericCall) : this.callRepository.createOutboundCall(genericCall);
    return await this.webhookCallRepository.createWebhookCall(newWebhookCall);
  }
}
