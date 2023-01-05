import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const DeleteNote = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  function restoreNote(deleteNote) {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [deleteNote, ...prevArr]);
  }

  function removeNote(deleteNote) {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
  }
  function removeNoteHandler() {
    removeNote(deleteNote);
  }
  function restoreNoteHandler() {
    restoreNote(deleteNote);
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.heading}</Typography>
        <Typography>{deleteNote.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={removeNoteHandler}
        />
        <Restore fontSize="small" onClick={restoreNoteHandler} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
