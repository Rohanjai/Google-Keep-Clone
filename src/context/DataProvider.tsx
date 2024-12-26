import { createContext, useMemo, useState, ReactNode } from "react";
import { Note, DataContextType } from "../model/types";

type DataProviderProps = {
  children: ReactNode;
};
export const DataContext = createContext<DataContextType | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
  const [notes, setNotes] = useState<Note[] | never[]>([]);
  const [archiveNotes, setAcrchiveNotes] = useState<Note[] | never[]>([]);
  const [deleteNotes, setDeleteNotes] = useState<Note[] | never[]>([]);
  const cache = useMemo(
    () => ({
      notes,
      setNotes,
      archiveNotes,
      setAcrchiveNotes,
      deleteNotes,
      setDeleteNotes,
    }),
    [notes, archiveNotes, deleteNotes]
  );
  return <DataContext.Provider value={cache}>{children}</DataContext.Provider>;
};

export default DataProvider;
