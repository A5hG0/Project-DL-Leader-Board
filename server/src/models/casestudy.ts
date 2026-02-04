// models/Case.ts
import { Schema, model, Document } from "mongoose";

export interface ICase extends Document {
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  implementation: string;
  results: string;
  learnings: string;
  createdAt: Date;
}

const CaseSchema = new Schema<ICase>(
  {
    title: { type: String, required: true },
    subtitle: String,
    problem: String,
    approach: String,
    implementation: String,
    results: String,
    learnings: String,
  },
  { timestamps: true },
);

export default model<ICase>("Case", CaseSchema);
