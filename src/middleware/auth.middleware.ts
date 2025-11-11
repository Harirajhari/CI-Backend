import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/Response";
import HTTP_STATUS from "../constants/enum/responseCodes.enum";

import JWT from "../utils/JWT";
import userType from "../constants/enum/userType.enum";
import { jwtUserPayload } from "../constants/middleware.type";

export const authenticateUser = (roles: userType[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Try to read token from cookie
      const token = req.cookies["session"];

      if (!token) {
        return ApiResponse.error(res, HTTP_STATUS.UNAUTHORIZED, "Unauthorized: No session cookie found");
      }

      const decoded = JWT.verifyAccessToken(token);
      
      // ensure decoded is an object, not a string
      if (typeof decoded === 'string') {
        return ApiResponse.error(res, HTTP_STATUS.UNAUTHORIZED, "Invalid token format");
      }
      
      req.user = decoded as jwtUserPayload;

       if (roles.length && !roles.includes((decoded as any).role)) {
          return ApiResponse.error(
            res,
            HTTP_STATUS.FORBIDDEN,
            "Forbidden: Access denied."
          );
        }

      next(); // continue to controller
    } catch (err: any) {
      return ApiResponse.error(res, HTTP_STATUS.UNAUTHORIZED, "Invalid or expired session token");
    }
  };
};
