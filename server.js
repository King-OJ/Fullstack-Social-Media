import 'express-async-errors';
import mongoose from 'mongoose';

import express from 'express';
const app = express();
app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
app.use(cookieParser());

import morgan from 'morgan';
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }



// import helmet from 'helmet';
// app.use(helmet());

// import mongoSanitize from 'express-mongo-sanitize';
// app.use(mongoSanitize());

app.get('/', (req, res) => {
    res.send('Hello World');
  })

app.get('/api/v1/test', (req, res) => {
res.json({ msg: 'test route' });
});

const port = process.env.PORT || 6001;

try {
    // await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, ()=> {
        console.log(`server running on PORT ${port}...`);
    })

} catch (error) {
    console.log(error);
    process.exit(1);
}
