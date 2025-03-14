import supabase from '../clients/supabaseClient';
import { BoundedCall } from '../models/boundedCall';

export class OutboundCallRepository {
    async createOutboundCall(genericCall: Omit<BoundedCall, 'id'>): Promise<BoundedCall | null> {
        const { data, error } = await supabase
            .from('outbound_calls')
            .insert(genericCall)
            .select()
            .single();

        if (error) {
            console.error('Error creating outbound call:', error);
            return null;
        }
        return data;
    }
}