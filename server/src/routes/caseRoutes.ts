// routes/cases.ts
import { Router, Request, Response } from "express";
import Case from "../models/casestudy";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const cases = await Case.find().sort({ createdAt: -1 });
  res.json(cases);
});

export default router;
