import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MainRouter } from "./src/controllers/mainRouter";
import dotenv from "dotenv";

// initiate db connection
import { dbConnect } from "./src/schemas/multiConnection";
dotenv.config();
dbConnect.createConnection(process.env.DB_URL);

const app = express();
const port = 7000;

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 1000000,
  })
);


app.use("/api", MainRouter);
app.listen(port, () => {
  console.log(`Form api is running on port ${port}.`);
});
