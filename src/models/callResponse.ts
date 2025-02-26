interface Call {
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

export { CallResponse, Call };