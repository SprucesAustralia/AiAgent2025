import express from 'express';
import { LeadCallController } from '../controllers/leadCallController';

const router = express.Router();
const leadCallController = new LeadCallController();

router.get('/leadCalls', (req, res) => leadCallController.getAllLeadCalls(req, res));
router.post('/leadCalls', (req, res) => leadCallController.createLeadCall(req, res));
router.get('/leadCalls/:id', (req, res) => leadCallController.getLeadCallById(req, res));
router.get('/leadCalls/leadId/:leadId', (req, res) => leadCallController.getLeadCallByLeadId(req, res));
router.get('/leadCalls/callId/:callId', (req, res) => leadCallController.getLeadCallByCallId(req, res));

export default router;