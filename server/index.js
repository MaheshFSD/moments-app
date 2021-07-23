import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'


const app = express()
app.use('/',postRoutes)
app.use(express.json())
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://admin:Mahesh@1@cluster0.vrvnb.mongodb.net/moments?retryWrites=true&w=majority'
const PORT=process.env.PORT || 8001 

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
mongoose.set('useFindAndModify',false)


app.listen(PORT,()=>console.log("Server is listening on: ",PORT))