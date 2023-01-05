import { createContext, useMemo, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setAcrchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
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
