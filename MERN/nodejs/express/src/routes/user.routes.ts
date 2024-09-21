import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/log',(req: Request,res: Response) => {
    res.json({message: "user settt"})
})

export default router