import { Request, Response } from "express";
import CaseStudy from "../models/casestudy";

export const getCases = async (_: Request, res: Response) => {
  const cases = await CaseStudy.find();
  res.json(cases);
};

export const getCaseById = async (req: Request, res: Response) => {
  const one = await CaseStudy.findById(req.params.id);
  res.json(one);
};

export const addCase = async (req: Request, res: Response) => {
  const newCase = new CaseStudy(req.body);
  await newCase.save();
  res.json(newCase);
};
