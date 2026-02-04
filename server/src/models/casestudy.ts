// models/CaseStudy.ts
import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  overview: String,
  datasetInfo: String,
  tasks: [String],
  expectedOutcome: String,
  difficulty: String,
});

export default mongoose.model("CaseStudy", CaseStudySchema);