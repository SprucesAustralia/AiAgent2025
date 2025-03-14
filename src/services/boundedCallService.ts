import { Call } from '../models/callResponse';
import { CallService } from './callService';
import { CallServiceFactory } from './callServiceFactory';
import { InboundCallService } from './inboundCallService';
import { OutboundCallService } from './outboundCallService';

export class BoundedCallService {

  async handleBoundedCall(call: Call): Promise<void> {
    const service = CallServiceFactory.getService(call.campaign_type);

    if (service instanceof InboundCallService) {
      await service.storeCall(call);
    } else if (service instanceof OutboundCallService) {
      await service.storeCall(call);
    } else {
      throw new Error('Unknown service type');
    }
  }
}