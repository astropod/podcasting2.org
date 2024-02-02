type NamespaceTag = {
  label: string;
  tag: string;
  popular: true;
  description: {
    short?: string;
    long: string;
  };
  parents: string[];
  parentsDescription?: string;
  count: string;
  nodeValue?: string;
  attributes?: {
    name: string;
    required: boolean;
    recommended?: boolean;
    description: string;
  }[];
  attributesDescription?: string;
  documentationUrl?: string;
  examples: {
    label?: string;
    language: string;
    code: string;
  }[];
  exampleUrl?: string;
  exampleImageUrls?: string[];
  notes?: string;
};
