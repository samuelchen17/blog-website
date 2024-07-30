import dotenv from "dotenv";

dotenv.config();

const config = {
  mongo: {
    options: {
      socketTimeoutMS: 30000, // Timeout after 30 seconds of inactivity
      maxPoolSize: 50, // Maximum of 50 connections in the connection pool
      // autoIndex: false, // Don't automatically build indexes, useful for production
      retryWrites: false, // Disable retryable writes for more control
    },
    url: process.env.MONGODB_URL,
  },
  server: {
    host: "localhost",
    port: 6767,
  },
};

export default config;
