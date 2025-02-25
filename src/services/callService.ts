import { postSynthFlowData } from '../clients/synthflowClient';
import { MakeACallRequest } from '../models/makeACallRequest';

const CALL_PATH = '/v2/calls'
export class CallService {

  constructor() {}

  async makeACall(makeACallRequest: MakeACallRequest): Promise<Response | null> {
    return await postSynthFlowData(CALL_PATH, makeACallRequest);
  }

}