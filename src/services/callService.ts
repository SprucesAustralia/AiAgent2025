import { postSynthFlowData, getSynthFlowData } from '../clients/synthflowClient';
import { MakeACallRequest } from '../models/makeACallRequest';
import { MakeACallResponse } from '../models/makeACallResponse';
import { Call, CallResponse } from '../models/callResponse';
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

  async getCallById( callId: string): Promise<CallResponse[] | null> {
    return await getSynthFlowData(`${CALL_PATH}/${callId}`);
  }

  async getAllCalls( params?: object): Promise<CallResponse[] | null> {
    return await getSynthFlowData(CALL_PATH, params);
  }

  async createCall(call: Omit<Call, 'id'>): Promise<Call | null> {
    const newCall: Call = buildCall({
      status: call.status,
      call_id: call.call_id,
      model_id: call.model_id,
      campaign_type: call.campaign_type,
      prompt_variables: call.prompt_variables,
      phone_number_from: call.phone_number_from,
      phone_number_to: call.phone_number_to,
      name:call.name,
      transcript: call.transcript,
      duration: call.duration,
      recording_url: call.recording_url,
      end_call_reason: call.end_call_reason,
      timezone: call.end_call_reason,
      start_time: call.start_time,
      executed_actions: call.executed_actions
    })
    return await this.callRepository.createCall(newCall);
  }
}
