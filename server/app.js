const express = require('express')
const app=express()
require('dotenv').config();
const morgan =require('morgan')
const cors = require('cors')
const DbConnection = require('./DbConnection')
const userRoutes = require('./routes/userRoute')
const ListRoutes = require('./routes/ListRoutes');
const { checkForUser } = require('./controller/middleware');
//middleware
app.use(express.json())
app.use(cors({origin:"*"}))
app.use(morgan("dev"))

//data base connection
DbConnection()

app.use('/api/user',userRoutes)
app.use('/api/v2',checkForUser, ListRoutes)

const Port = process.env.PORT || 6060
app.listen(Port,()=>{
    console.log(`server Listening on ${Port}...`);
})