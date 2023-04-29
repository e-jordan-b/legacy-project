import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './router';
import session, { SessionOptions } from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';

dotenv.config();

export const app = express();
const SERVER_PORT = process.env.PORT || 3002;

const expirationDate:Date = new Date();
expirationDate.setHours(expirationDate.getHours() + 3);

interface ExtendedSessionOptions extends SessionOptions {
  key: string;
}

const sessionOptions: ExtendedSessionOptions = {
  key: 'user_sid',
  // secret: process.env.SESSION_SECRET,
  secret: 'SUPERkey',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: expirationDate, // 3 hours
    httpOnly: false,
  }
}

app
  .use(cors())
  .use(express.json()) // Is it not this the bodyparser?
  .use(bodyParser.urlencoded({ extended: false }))
  .use(router)
  .use(session(sessionOptions))

export const server = app.listen(SERVER_PORT, (err?: Error) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
    } else {
      console.log(`🚀 Server (sessions) is listening on port ${SERVER_PORT}!`); // eslint-disable-line no-console
    }
  });
