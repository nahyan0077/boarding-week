import express, { Application, Request, Response } from 'express'
import { checkRole } from './middleware/user.middleware'
import router from './routes/user.routes'
import morgan from 'morgan'

const app: Application = express()

const PORT: number = Number (process.env.PORT) || 3000
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(checkRole)

app.get('/', (req: Request,res: Response)=>{
    res.json({message: "health check"})
})

app.use('/user',router)

app.listen(PORT, ()=>{
    console.log(`Server listring to ${PORT}`);
})