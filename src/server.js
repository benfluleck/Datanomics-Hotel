import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';

import router from './routes';
import setGlobalMiddleware from './middleware/global';


const redis = new Redis();

const isProduction = process.env.NODE_ENV === 'production';
const SESSION_LIFETIME = 60 * 60 * 1000 * 2;
const app = express();

const RedisStore = connectRedis(session);

setGlobalMiddleware(app);

isProduction && app.set('trust proxy', 1);

app.use(
  session({
    store: new RedisStore({
      url: isProduction && process.env.REDISTOGO_URL
    }),
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: isProduction,
      maxAge: SESSION_LIFETIME,
      sameSite: true
    }
  })
);

setGlobalMiddleware(app);

app.use(router);


app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

export default app;
