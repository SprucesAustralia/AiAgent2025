export interface MakeACallResponse {
    status: string;
    response: {
        answer: string;
        call_id: string;
    };
}