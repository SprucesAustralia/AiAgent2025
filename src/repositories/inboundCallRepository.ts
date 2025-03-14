import supabase from '../clients/supabaseClient';
import { BoundedCall } from '../models/boundedCall';

export class InboundCallRepository {
    async createInboundCall(inboundCall: Omit<BoundedCall, 'id'>): Promise<BoundedCall | null> {
        const { data, error } = await supabase
            .from('inbound_calls')
            .insert(inboundCall)
            .select()
            .single();
        console.info('Data', data);

        if (error) {
            console.error('Error creating inbound call:', error);
            return null;
        }
        return data;
    }
}