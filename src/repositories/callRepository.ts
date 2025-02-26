import supabase from '../clients/supabaseClient';
import { Call } from '../models/callResponse';

export class CallRepository {
    async createCall(call: Omit<Call, 'id'>): Promise<Call | null> {
        const { data, error } = await supabase
            .from('calls')
            .insert(call)
            .select()
            .single();

        if (error) {
            console.error('Error creating call:', error);
            return null;
        }
        return data;
    }
}