import { getSynthFlowData } from '../clients/synthflowClient';
import { Assistant } from '../models/assistant';

const ASSISTANT_PATH = '/v2/assistants'
export class AssistantService {

  constructor() {}

  async getAllAssistants( params?: object): Promise<Assistant[] | null> {
    return await getSynthFlowData(ASSISTANT_PATH, params);
  }

}