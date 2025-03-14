import { Call } from '../models/callResponse';
import { InboundCallRepository } from '../repositories/inboundCallRepository';

export class InboundCallService {

    private inboundCallRepository: InboundCallRepository;

    constructor() {
        this.inboundCallRepository = new InboundCallRepository();
    }
    async storeCall(inboundCall: Call): Promise<void> {
        this.inboundCallRepository.createInboundCall(inboundCall);
    }
}