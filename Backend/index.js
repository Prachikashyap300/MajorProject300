const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const userRouter = require('./Routers/User');
const projectRouter = require('./Routers/Project');

// cors

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter); 
app.use('/project', projectRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });