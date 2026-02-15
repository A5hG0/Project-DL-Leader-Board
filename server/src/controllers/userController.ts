import { Request, Response } from "express";
import User from "../models/User";

export const getLeaderboard = async (_: Request, res: Response) => {
  const users = await User.find().sort({ score: -1 });
  res.json(users);
};