import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


connectDB();

app.get("/", (req, res) => {
    res.send("<h1>hii welcome to ecommerece webapp</h1>");
  });


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} MODE on port ${PORT}`
  );
});
