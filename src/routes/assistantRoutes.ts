import express from 'express';
import { AssistantController } from '../controllers/AssistantController';

const router = express.Router();
const assistantController = new AssistantController();

router.get('/assistants', (req, res) => assistantController.getAllAssistants(req, res));

export default router;