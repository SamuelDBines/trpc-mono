import express from 'express';
import cors from 'cors';
import fs from 'fs';
// import axios from 'axios';
// import path from 'path';
import compression from 'compression';
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "@packages/common";

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

const app = express();

app.use(compression());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.options('*', cors());

app.use(express.json());

app.use(express.static('public'));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({ router: appRouter })
);

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
  process.exit(1); // Exit process after handling
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

export default app;