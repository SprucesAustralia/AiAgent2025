import { BoundedCall } from '../models/boundedCall';
import { OutboundCallRepository } from '../repositories/outboundCallRepository';

export class OutboundCallService {

    private outboundCallRepository: OutboundCallRepository;

    constructor() {
        this.outboundCallRepository = new OutboundCallRepository();
    }
    async storeCall(outboundCall: BoundedCall): Promise<void> {
        this.outboundCallRepository.createOutboundCall(outboundCall);
    }
}