import supabase from '../clients/supabaseClient';
import { Call } from '../models/callResponse';

export class WebhookCallRepository {
    async createWebhookCall(webhookCall: Omit<Call, 'id'>): Promise<Call | null> {
        const { data, error } = await supabase
            .from('webhook_calls')
            .insert(webhookCall)
            .select()
            .single();

        if (error) {
            console.error('Error creating webhook call:', error);
            return null;
        }
        return data;
    }
}