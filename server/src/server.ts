import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import caseRoutes from "./routes/caseRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
connectDB();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://deep-learning-tab.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/cases", caseRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => console.log("🚀 Server running"));
