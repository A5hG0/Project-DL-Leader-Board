// models/Case.ts
import { Schema, model, Document } from "mongoose";

/* =============================
   Section Sub-Schemas
============================= */

const CompositeBlockSchema = new Schema(
  {
    subtype: {
      type: String,
      enum: ["text", "code"],
      required: true,
    },
    value: { type: String, required: true },
    language: { type: String },
  },
  { _id: false },
);

const SectionSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["text", "list", "code", "composite"],
      required: true,
    },
    heading: { type: String, required: true },

    // Flexible content storage
    content: {
      type: Schema.Types.Mixed,
      required: true,
    },

    language: { type: String }, // optional for code blocks
  },
  { _id: false },
);

/* =============================
   Main Case Interface
============================= */

export interface ICase extends Document {
  title: string;
  subtitle?: string;
  category?: string;
  sections: any[];
  createdAt: Date;
  updatedAt: Date;
}

/* =============================
   Main Case Schema
============================= */

const CaseSchema = new Schema<ICase>(
  {
    title: { type: String, required: true },
    subtitle: String,
    category: String,

    sections: [SectionSchema],
  },
  { timestamps: true },
);

export default model<ICase>("Case", CaseSchema);
