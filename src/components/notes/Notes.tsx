import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/DataProvider.tsx";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

interface NoteType {
  id: string;
  heading: string;
  text: string;
}

interface DataContextType {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
  setAcrchiveNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
  setDeleteNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext) as DataContextType;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {notes.map((note) => (
              <Grid key={note.id}>
                <Note note={note} key={note.id} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
