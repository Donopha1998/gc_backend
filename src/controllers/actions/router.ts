import express from "express";
import { Controller } from "./controller";
import multer from "multer";
var app = express.Router();



app.post("/", (req, res) => {
  Controller.createAction(req, res);
});


app.get("/", (req, res) => {
  Controller.listProducts(req, res);
});





export const actionRouter = app;
