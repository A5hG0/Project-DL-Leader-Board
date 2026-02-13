import express from "express";
import Case from "../models/casestudy";

const router = express.Router();

/* ---------------- GET ALL CASES ---------------- */
router.get("/", async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cases" });
  }
});

/* ---------------- GET SINGLE CASE ---------------- */
router.get("/:id", async (req, res) => {
  try {
    const caseStudy = await Case.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({ message: "Case not found" });
    }

    res.json(caseStudy);
  } catch (error) {
    res.status(500).json({ message: "Error fetching case" });
  }
});

export default router;
