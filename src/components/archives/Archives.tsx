import { useContext } from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/DataProvider.tsx";

import Archive from "./Archive";
import EmptyArchive from "./EmptyArchive.tsx";
import { DataContextType } from "../../model/types";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext) as DataContextType;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container>
            {archiveNotes.map((archive) => (
              <Grid item key={archive.id}>
                <Archive archive={archive} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchive />
        )}
      </Box>
    </Box>
  );
};

export default Archives;
