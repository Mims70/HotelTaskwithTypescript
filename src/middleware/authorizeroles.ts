import { Request, Response, NextFunction } from 'express';

function authorizeRoles(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' }); // Return Forbidden status if user role is not allowed
    }
    next(); // Pass the request to the next middleware or route handler
  };
}

export default authorizeRoles;
