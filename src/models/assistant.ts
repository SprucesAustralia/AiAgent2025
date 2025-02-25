export interface Agent {
    prompt: string;
    llm: string;
    language: string;
    greeting_message: string;
    voice_id: string;
    voice_stability: number;
    voice_similarity_boost: number;
    voice_optimise_streaming_latency: number;
    voice_style: number;
    voice_use_speaker_boost: boolean;
    voice_prompt: string;
    allowed_idle_time_seconds: number;
    initial_pause_seconds: number;
    transcriber_keywords: string[];
    ring_pause_seconds: number | null;
    patience_level: string;
  }
  
  export interface MaxDuration {
    duration_seconds: number;
    is_enabled: boolean;
  }
  
  export interface Assistant {
    model_id: string;
    workspace_id: string;
    type: string;
    name: string;
    description: string;
    phone_number: string;
    external_webhook_url: string;
    is_recording: boolean;
    agent: Agent;
    max_duration: MaxDuration;
    actions: string[];
  }