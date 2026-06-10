require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express5'); 
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const cors = require('cors');
const http = require('http');
const connectDB = require('./config/database');
const passport = require('passport');
require('./config/passport')(passport);

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const startServer = async () => {
  try {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    await connectDB(); 
    app.use(cookieParser());
    app.use(express.json());
    app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true 
    }));
    app.use(passport.initialize());
  
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);

    app.use(
      '/graphql',
      expressMiddleware(server),
    );

    httpServer.listen(3000, () => {
      console.log("Server running on http://localhost:3000/graphql");
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();