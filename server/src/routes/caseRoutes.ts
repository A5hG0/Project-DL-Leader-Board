import express from "express";
import { getCases, getCaseById, addCase } from "../controllers/caseController";

const router = express.Router();

router.get("/", getCases);
router.get("/:id", getCaseById);
router.post("/", addCase);

export default router;
