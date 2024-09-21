import {NextFunction, Request, Response} from 'express'


export const checkRole = (req: Request, res: Response, next: NextFunction) => {
    console.log("Role");
    next()
}

