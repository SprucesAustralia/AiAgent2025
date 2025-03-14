import { Call } from '../models/callResponse';
import { OutboundCallRepository } from '../repositories/outboundCallRepository';

export class OutboundCallService {

    private outboundCallRepository: OutboundCallRepository;

    constructor() {
        this.outboundCallRepository = new OutboundCallRepository();
    }
    async storeCall(outboundCall: Call): Promise<void> {
        this.outboundCallRepository.createOutboundCall(outboundCall);
    }
}