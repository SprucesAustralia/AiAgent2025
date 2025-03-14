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
    console.info('Get call details from SynthFlow', boundedCallDetails.response.calls[0]);
    const boundedCallDetail = boundedCallDetails.response.calls[0];
    console.info('Calling get Service');
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