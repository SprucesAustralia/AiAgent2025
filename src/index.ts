import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/leadRoutes';
import assistantRoutes from './routes/assistantRoutes';
import leadCallRoutes from './routes/leadCallRoutes';

const API_PATH_VERSION = '/api/v1';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(API_PATH_VERSION, leadRoutes);
app.use(API_PATH_VERSION, assistantRoutes);
app.use(API_PATH_VERSION, leadCallRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});