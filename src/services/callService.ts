import { postSynthFlowData, getSynthFlowData } from '../clients/synthflowClient';
import { MakeACallRequest } from '../models/makeACallRequest';
import { MakeACallResponse } from '../models/makeACallResponse';
import { CallResponse } from '../models/callResponse';

const CALL_PATH = '/v2/calls'
export class CallService {

  constructor() {}

  async makeACall(makeACallRequest: MakeACallRequest): Promise<MakeACallResponse | null> {
    return await postSynthFlowData(CALL_PATH, makeACallRequest);
  }

  async getCallById( callId: string): Promise<CallResponse[] | null> {
    return await getSynthFlowData(`${CALL_PATH}/${callId}`);
  }

  async getAllCalls( params?: object): Promise<CallResponse[] | null> {
    return await getSynthFlowData(CALL_PATH, params);
  }

}
