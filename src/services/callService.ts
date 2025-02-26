import { postSynthFlowData } from '../clients/synthflowClient';
import { MakeACallRequest } from '../models/makeACallRequest';
import { MakeACallResponse } from '../models/makeACallResponse';

const CALL_PATH = '/v2/calls'
export class CallService {

  constructor() {}

  async makeACall(makeACallRequest: MakeACallRequest): Promise<MakeACallResponse | null> {
    return await postSynthFlowData(CALL_PATH, makeACallRequest);
  }

}