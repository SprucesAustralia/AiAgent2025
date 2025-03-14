import supabase from '../clients/supabaseClient';
import { BoundedCalls } from '../models/callResponse';

export class InboundCallRepository {
    async createInboundCall(genericCall: Omit<BoundedCalls, 'id'>): Promise<BoundedCalls | null> {
        const { data, error } = await supabase
            .from('inbound_calls')
            .insert(genericCall)
            .select()
            .single();

        if (error) {
            console.error('Error creating inbound call:', error);
            return null;
        }
        return data;
    }
}