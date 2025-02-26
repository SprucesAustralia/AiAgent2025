# AiAgent2025 
- AiAgent2025 is the node js server which communicates to supabase, synthflow API and openai API.

## Database
- SprucesAiagents

## Tables
- leads
  - This is the table used to store all the leads coming from the business website.https://spruces.co
- lead_call
  - This is the table used to store the lead id, lead number, and call id. 

## Local Setup
- Download Nodejs v22
- git clone `git@github.com:SprucesAustralia/AiAgent2025.git`
- cd AiAgent2025
- npm ci
- create .env file
- npm start (This command will start your server)

### .env
```
PORT=*****
SUPABASE_URL=*******
SUPABASE_KEY=*******
SYNTHFLOW_API_KEY=*******
API_KEY=*********
```
