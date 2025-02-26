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

interface CallResponse {
    status: string;
    response: {
        calls: Call[];
    };
}

export { CallResponse, Call };