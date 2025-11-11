import { Request, Response } from 'express';
import ApiResponse from '../utils/Response';

import prisma from "../lib/prisma";

import * as employeeService from '../services/employee.service';


// Profile Management
export const getProfile = async (req: Request, res: Response) => {
    try {
        let user = await employeeService.getEmployeeProfileByEmail(req.user!.email);

        return ApiResponse.success(res, 200, "Profile retrieved successfully", {
            user
        });
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve profile");
    }
};

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const profileData = req.body;
        // get user id from req.user and updat profile data
        const updatedUser = await prisma.user.update({
            where: { email: req.user!.email },
            data: profileData
        });

        return ApiResponse.success(res, 200, "Profile updated successfully", { updatedUser });
    } catch (error: any) {
        return ApiResponse.error(res, 500, "Failed to update profile", error);
    }
};

// Family History
export const getFamilyHistory = async (req: Request, res: Response) => {
    try {
       let familyHistory = await employeeService.getEmployeeFamilyHistory(req.user!.pgID);
        return ApiResponse.success(res, 200, "Family history retrieved successfully", { familyHistory });
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve family history");
    }
};

export const updateFamilyHistory = async (req: Request, res: Response) => {
    try {
        const historyData = req.body;
        // todo: implement family history update logic
        return ApiResponse.success(res, 200, "Family history updated successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to update family history");
    }
};
// Screening History & Schedule
export const getScreeningHistory = async (req: Request, res: Response) => {
    try {
        // todo: implement screening history fetch logic
        return ApiResponse.success(res, 200, "Screening history retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve screening history");
    }
};

export const getScreeningSchedule = async (req: Request, res: Response) => {
    try {
        // todo: implement schedule fetch logic
        return ApiResponse.success(res, 200, "Screening schedule retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve screening schedule");
    }
};

export const bookScreeningAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData = req.body;
        // todo: implement appointment booking logic
        return ApiResponse.success(res, 201, "Screening appointment booked successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to book screening appointment");
    }
};

export const getQRCode = async (req: Request, res: Response) => {
    try {
        // todo: implement QR code generation logic
        return ApiResponse.success(res, 200, "QR code generated successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to generate QR code");
    }
};

// Education Modules
export const listEducationModules = async (req: Request, res: Response) => {
    try {
        // todo: implement education modules list logic
        return ApiResponse.success(res, 200, "Education modules retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve education modules");
    }
};

export const getEducationModule = async (req: Request, res: Response) => {
    try {
        const { moduleId } = req.params;
        // todo: implement single module fetch logic
        return ApiResponse.success(res, 200, "Education module retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve education module");
    }
};

export const logEducationView = async (req: Request, res: Response) => {
    try {
        const { moduleId } = req.params;
        // todo: implement view logging logic
        return ApiResponse.success(res, 200, "Education view logged successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to log education view");
    }
};

// Test Results
export const getTestResults = async (req: Request, res: Response) => {
    try {
        // todo: implement test results list logic
        return ApiResponse.success(res, 200, "Test results retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve test results");
    }
};

export const getResultDetail = async (req: Request, res: Response) => {
    try {
        const { resultId } = req.params;
        // todo: implement result detail fetch logic
        return ApiResponse.success(res, 200, "Test result details retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve test result details");
    }
};

export const getAIExplanation = async (req: Request, res: Response) => {
    try {
        const { resultId } = req.params;
        // todo: implement AI explanation logic
        return ApiResponse.success(res, 200, "AI explanation generated successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to generate AI explanation");
    }
};

// Follow-up Actions
export const getFollowupActions = async (req: Request, res: Response) => {
    try {
        // todo: implement follow-up actions fetch logic
        return ApiResponse.success(res, 200, "Follow-up actions retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve follow-up actions");
    }
};

// Consent Management
export const acceptConsent = async (req: Request, res: Response) => {
    try {
        // todo: implement consent acceptance logic
        return ApiResponse.success(res, 200, "Consent accepted successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to accept consent");
    }
};

export const withdrawConsent = async (req: Request, res: Response) => {
    try {
        // todo: implement consent withdrawal logic
        return ApiResponse.success(res, 200, "Consent withdrawn successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to withdraw consent");
    }
};

export const getConsentHistory = async (req: Request, res: Response) => {
    try {
        // todo: implement consent history fetch logic
        return ApiResponse.success(res, 200, "Consent history retrieved successfully", {});
    } catch (error) {
        return ApiResponse.error(res, 500, "Failed to retrieve consent history");
    }
};
