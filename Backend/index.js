const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const userRouter = require('./Routers/User');
//const productRouter = require('./Routers/Product');

// cors

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter); 
//app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });