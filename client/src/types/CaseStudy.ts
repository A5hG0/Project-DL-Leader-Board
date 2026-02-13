export type TextSection = {
  type: "text";
  heading: string;
  content: string;
};

export type ListSection = {
  type: "list";
  heading: string;
  content: string[];
};

export type CodeSection = {
  type: "code";
  heading: string;
  content: string;
  language?: string;
};

export type CompositeBlock =
  | { subtype: "text"; value: string }
  | { subtype: "code"; value: string; language?: string };

export type CompositeSection = {
  type: "composite";
  heading: string;
  content: CompositeBlock[];
};

export type Section =
  | TextSection
  | ListSection
  | CodeSection
  | CompositeSection;

export interface Case {
  _id: string;
  title: string;
  subtitle?: string;
  category?: string;
  sections: Section[];
}
