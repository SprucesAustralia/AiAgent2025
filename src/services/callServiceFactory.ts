import { InboundCallService } from './inboundCallService';
import { OutboundCallService } from './outboundCallService';

export class CallServiceFactory {

  static getService(campaignType: string) {

    if (campaignType === 'Inbound') {
      return new InboundCallService();
    } else if (campaignType === 'Outbound') {
      return new OutboundCallService();
    } else {
      throw new Error('Unknown model ID');
    }
  }
}