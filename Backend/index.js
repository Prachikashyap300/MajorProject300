const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const userRouter = require('./Routers/User');
const projectRouter = require('./Routers/Project');
const utilRouter = require('./Routers/Util');
const contactRouter = require('./Routers/Contact');


// cors

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter); 
app.use('/project', projectRouter);
app.use('/util', utilRouter);
app.use('/contact', contactRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });