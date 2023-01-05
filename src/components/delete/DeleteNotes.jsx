import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/DataProvider";

//components
import DeleteNote from "./DeleteNote";
import EmptyDeleted from "./EmptyDeleted";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container>
            {deleteNotes.map((deleteNote) => (
              <Grid item key={deleteNote.uuid}>
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
