import supabase from '../clients/supabaseClient';
import { BoundedCalls } from '../models/callResponse';

export class OutboundCallRepository {
    async createOutboundCall(genericCall: Omit<BoundedCalls, 'id'>): Promise<BoundedCalls | null> {
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