import { InboundCallService } from './inboundCallService';
import { OutboundCallService } from './outboundCallService';

export class CallServiceFactory {

  static getService(campaignType: string) {

    if (campaignType === 'Inbound') {
    console.info('Gey Inbound Service');

      return new InboundCallService();
    } else if (campaignType === 'Outbound') {
    console.info('Get Outbound Service');

      return new OutboundCallService();
    } else {
      throw new Error('Unknown model ID');
    }
  }
}