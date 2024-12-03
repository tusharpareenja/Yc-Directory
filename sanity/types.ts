export type Startup = {
    _id: string;
    _type: "startup";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    
    author?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "author";
    };
    views?: number;
    description?: string;
    category?: string;
    image?: string;
    pitch?: string;
  };

  export type Author = {
    _id: string;
    _type: "author";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    image?: string;
    bio?: string;
  };

  export type Markdown = string;

export declare const internalGroqTypeReferenceTo: unique symbol;