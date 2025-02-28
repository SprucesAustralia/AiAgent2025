import { postSynthFlowData, getSynthFlowData } from '../clients/synthflowClient';
import { postZapierData } from '../clients/zapierClient';
import { MakeACallRequest } from '../models/makeACallRequest';
import { MakeACallResponse } from '../models/makeACallResponse';
import { Call, CallResponse, WebhookCall } from '../models/callResponse';
import { CallRepository } from '../repositories/callRepository';
import { buildCall } from '../utils/buildCall';

const CALL_PATH = '/v2/calls'
export class CallService {
  private callRepository: CallRepository;
  constructor() {
    this.callRepository = new CallRepository();
  }

  async makeACall(makeACallRequest: MakeACallRequest): Promise<MakeACallResponse | null> {
    return await postSynthFlowData(CALL_PATH, makeACallRequest);
  }

  async getCallById(callId: string): Promise<CallResponse[] | null> {
    return await getSynthFlowData(`${CALL_PATH}/${callId}`);
  }

  async getAllCalls(params?: object): Promise<CallResponse[] | null> {
    return await getSynthFlowData(CALL_PATH, params);
  }

  async createCall(call: Omit<WebhookCall, 'id'>): Promise<Call | null> {
    // Ignore +1123456789 number as it's the check webhook call to our webhook receiver from Synthflow
    if (call.lead.phone_number === '+1123456789') {
      return null;
    }
    await postZapierData('', call)
    const newCall: Call = buildCall({
      status: call.status,
      call_id: call.call.call_id,
      model_id: call.call.model_id,
      prompt_variables: call.lead.prompt_variables,
      phone_number_to: call.lead.phone_number,
      name: call.lead.name,
      transcript: call.call.transcript,
      duration: call.call.duration,
      recording_url: call.call.recording_url,
      end_call_reason: call.call.end_call_reason,
      timezone: call.call.timezone,
      start_time: call.call.start_time,
      executed_actions: call.executed_actions
    });
    return await this.callRepository.createCall(newCall);
  }
}
