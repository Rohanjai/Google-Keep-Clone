export type Note = {
  id: string;
  heading: string;
  text: string;
};
export type DataContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  archiveNotes: Note[];
  setAcrchiveNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  deleteNotes: Note[];
  setDeleteNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
