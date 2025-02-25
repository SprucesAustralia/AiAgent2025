import express from 'express';
import { LeadController } from '../controllers/leadController';

const router = express.Router();
const leadController = new LeadController();

router.get('/leads', (req, res) => leadController.getAllLeads(req, res));
router.post('/leads', (req, res) => leadController.createLead(req, res));
router.get('/leads/:id', (req, res) => leadController.getLeadById(req, res));
router.get('/leads/leadnumber/:leadNumber', (req, res) => leadController.getLeadByLeadNumber(req, res));
router.put('/leads/:id', (req, res) => leadController.updateLead(req, res));
router.delete('/leads/:id', (req, res) => leadController.deleteLead(req, res));

export default router;