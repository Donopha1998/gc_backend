import { Router } from "express";
import { actionRouter } from "./actions/router";

const app = Router();

app.use("/", actionRouter);

export const MainRouter = app;
