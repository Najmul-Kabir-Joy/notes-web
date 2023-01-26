export type TagOptions = string[];

export interface TagColorSet {
  [tag: string]: { note: string; ribbon: string };
}

export interface NoteInterface {
  data: {
    id: string;
    title: string;
    tag: string;
    note: string;
  };
}

export interface NotesData {
  _id: string;
  tag: string;
  title: string;
  note: string;
  email: string;
  editHistory: Date[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
