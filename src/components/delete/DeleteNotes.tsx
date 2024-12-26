import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/DataProvider.tsx";

import DeleteNote from "./DeleteNote";
import EmptyDeleted from "./EmptyDeleted.tsx";
import { Note as NoteType, DataContextType } from "../../model/types";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext) as DataContextType;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map((deleteNote: NoteType) => (
              <Grid item key={deleteNote.id}>
                <DeleteNote deleteNote={deleteNote} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyDeleted />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
