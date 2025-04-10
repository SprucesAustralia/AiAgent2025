import { Call } from '../models/callResponse';
import { CallService } from './callService';
import { CallServiceFactory } from './callServiceFactory';
import { InboundCallService } from './inboundCallService';
import { OutboundCallService } from './outboundCallService';

export class BoundedCallService {

  private readonly modelIdMap = new Map<string, string>([
    ['1738396481314x557318381134590600', 'Inbound'],
    ['1738741426507x677820573910445700', 'Outbound'],
  ]);

  async handleBoundedCall(call: Call): Promise<void> {
    // const campaignType = this.modelIdMap.get(call.model_id);

    // {if (campaignType === undefined) {
    //   throw new Error('Unknown model ID');
    // }
    // const service = CallServiceFactory.getService(campaignType);

    // if (service instanceof InboundCallService) {
    //   await service.storeCall(call);
    // } else if (service instanceof OutboundCallService) {
    //   await service.storeCall(call);
    // }}
  }
}