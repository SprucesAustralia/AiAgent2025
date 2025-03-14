import { CallService } from './callService';
import { CallServiceFactory } from './callServiceFactory';
import { InboundCallService } from './inboundCallService';
import { OutboundCallService } from './outboundCallService';

export class BoundedCallService {
  
  private callService: CallService;

  constructor() {
    this.callService = new CallService();
  }

  async handleBoundedCall(call_id: string): Promise<void> {
    const boundedCallDetails = await this.callService.getCallById(call_id);

    if (!boundedCallDetails) {
      throw new Error('Call details not found');
    }
    const boundedCallDetail = boundedCallDetails[0];
    const service = CallServiceFactory.getService(boundedCallDetail.campaign_type);

    if (service instanceof InboundCallService) {
      await service.storeCall(boundedCallDetail);
    } else if (service instanceof OutboundCallService) {
      await service.storeCall(boundedCallDetail);
    } else {
      throw new Error('Unknown service type');
    }
  }
}