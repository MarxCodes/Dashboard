require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const xss = require('xss-clean');
const authenticateUser = require('./middleware/authentication');
const authRouter = require('./routes/auth');
const newsRouter = require('./routes/news');
const weatherRouter = require('./routes/weather');
const clothesRouter = require('./routes/clothes');
const searchRouter = require('./routes/searchTeam');
const photoRouter = require('./routes/photos');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.set('trust proxy', 1);
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));
app.use(helmet());
app.use(cors());
app.use(xss());

const connectDB = require('./db/connect');

app.get('/', (req,res) => {
  res.send('jobs api');
})

app.use(errorHandlerMiddleware);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/search', searchRouter);
app.use('/api/v1/photo', photoRouter);
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/weather', weatherRouter)
// app.use('/api/v1/tasks', taskRouter);
// app.use('/api/v1/sports', sportsRouter);
app.use('/api/v1/clothes', clothesRouter);

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async(req,res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('server listening on :', port));
  }
  catch (err) {
    throw new Error(err)
  }
}

start();