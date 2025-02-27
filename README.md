# AiAgent2025 
- AiAgent2025 is the node js server which communicates to supabase, synthflow API and openai API.

## Dev environment
- https://ai-agent2025-blush.vercel.app/api/v1/leads Get the list of leads.
- https://ai-agent2025-blush.vercel.app/api/v1/calls Get the list of calls.


## Database
- SprucesAiagents

## Tables
- leads
  - This is the table used to store all the leads coming from the business website.https://spruces.co
- lead_call
  - This is the table used to store the lead id, lead number, and call id. 
- calls
  - This is the webhook response from the synthflow.

## Local Setup
- Download Nodejs v22
- git clone `git@github.com:SprucesAustralia/AiAgent2025.git`
- cd AiAgent2025
- npm ci
- create .env file
- npm run dev (This command will start your server)
- npm run build && npm start (Only for production)

### .env
```
PORT=*****
SUPABASE_URL=*******
SUPABASE_KEY=*******
SYNTHFLOW_API_KEY=*******
API_KEY=*********
```
