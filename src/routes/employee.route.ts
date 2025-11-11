import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller';
import userType from '../constants/enum/userType.enum';
import { authenticateUser } from '../middleware/auth.middleware';

const router = Router();

// Profile Management
router.get('/profile', authenticateUser([userType.ADMIN, userType.EMPLOYEE, userType.EMPLOYER, userType.NAVIGATOR, userType.PROVIDER]), employeeController.getProfile);
router.patch('/profile', authenticateUser([userType.ADMIN, userType.EMPLOYEE, userType.EMPLOYER, userType.NAVIGATOR, userType.PROVIDER]), employeeController.updateProfile);

// Family History
router.get('/family-history', employeeController.getFamilyHistory);
router.put('/family-history', employeeController.updateFamilyHistory);

// Screening History & Schedule
router.get('/screening-history', employeeController.getScreeningHistory);
router.get('/screening/schedule', employeeController.getScreeningSchedule);
router.post('/screening/book', employeeController.bookScreeningAppointment);
router.get('/screening/qr', employeeController.getQRCode);

// Education Modules
router.get('/education', employeeController.listEducationModules);
router.get('/education/:moduleId', employeeController.getEducationModule);
router.post('/education/:moduleId/view', employeeController.logEducationView);

// Test Results
router.get('/results', employeeController.getTestResults);
router.get('/results/:resultId', employeeController.getResultDetail);
router.post('/results/:resultId/explain', employeeController.getAIExplanation);

// Follow-up Actions
router.get('/followup', employeeController.getFollowupActions);

// Consent Management
router.post('/consent/accept', employeeController.acceptConsent);
router.post('/consent/withdraw', employeeController.withdrawConsent);
router.get('/consent/history', employeeController.getConsentHistory);

export default router;
