interface CustomVariable {
    key: string;
    value: string;
}

interface MakeACallRequest {
    model_id: string;
    team_id?: string;
    phone: string;
    name: string;
    address: string;
    custom_variables?: CustomVariable[];
    lead_email?: string;
    lead_timezone?: string;
    prompt?: string;
    greeting?: string;
}

export { CustomVariable, MakeACallRequest };