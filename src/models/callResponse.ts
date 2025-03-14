interface Call {
    call_id: string;
    status: string;
    model_id: string;
    campaign_type: string;
    prompt_variables:object;
    phone_number_from: string;
    phone_number_to: string;
    name: string;
    transcript: string;
    duration: number;
    recording_url: string;
    end_call_reason: string;
    timezone: string;
    start_time: string;
    executed_actions: object;
}

// since data types are same, created a boundedCalls model instead of inbound and outbound calls separately.
interface BoundedCalls {
    call_id: string;
    model_id: string;
    campaign_type: string;
    phone_number_from: string;
    phone_number_to: string;
    name: string;
    transcript: string;
    duration: number;
    recording_url: string;
    end_call_reason: string;
}

interface CallResponse {
    status: string;
    response: {
        calls: Call[];
    };
}

interface Lead {
    name: string;
    phone_number: string;
    prompt_variables: object;
}

interface WebhookCall {
    status: string;
    lead: Lead;
    call: Call;
    executed_actions: object;
    analysis: {}
}

export { CallResponse, Call, WebhookCall, BoundedCalls };