import { Request, Response, NextFunction } from 'express';

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey = req.header('x-api-key');
    const validApiKey = process.env.API_KEY;

    if (apiKey && apiKey === validApiKey) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};