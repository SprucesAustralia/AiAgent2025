import { BoundedCall } from '../models/boundedCall';
import { InboundCallRepository } from '../repositories/inboundCallRepository';

export class InboundCallService {

    private inboundCallRepository: InboundCallRepository;

    constructor() {
        this.inboundCallRepository = new InboundCallRepository();
    }
    async storeCall(inboundCall: BoundedCall): Promise<void> {
        this.inboundCallRepository.createInboundCall(inboundCall);
    }
}