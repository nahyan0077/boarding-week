import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const app = express()

app.use(cookieParser())
app.use(morgan('dev'))
const PORT = 4000

app.get('/',(req,res) => {
    res.json({
        sucess: true,
        message:"Express ok"
    })
})


app.listen(PORT,() => {
    console.log(`App listening to the port: ${PORT}`);
})

