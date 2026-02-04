import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import caseRoutes from "./routes/caseRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/cases", caseRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => console.log("🚀 Server running on 5000"));
