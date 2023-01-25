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
