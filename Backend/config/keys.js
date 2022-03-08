import dotenv from "dotenv";

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  frontend_domain: process.env.frontend_domain,
  backend_domain: process.env.backend_domain,
  mongoURI: process.env.mongoURI,
  secretOrKey: process.env.secretOrKey,
  cookieMaxAge: 1000 * 60 * 60 * 24 * 14,
  GitHub: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  },
};
