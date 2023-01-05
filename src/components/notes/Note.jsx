import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

function Note({ note }) {
  const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  function archiveNote(note) {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setAcrchiveNotes((prevArr) => [note, ...prevArr]);
  }

  function deleteNote(note) {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  }
  function archiveHandler() {
    archiveNote(note);
  }
  function deleteHandler() {
    deleteNote(note);
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={archiveHandler}
        />
        <Delete fontSize="small" onClick={deleteHandler} />
      </CardActions>
    </StyledCard>
  );
}

export default Note;
