import { useCallback, useContext } from "react";

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

  const restoreNote = useCallback(
    (deleteNote) => {
      const updatedNotes = deleteNotes.filter(
        (data) => data.id !== deleteNote.id
      );
      setDeleteNotes(updatedNotes);
      setNotes((prevArr) => [deleteNote, ...prevArr]);
    },
    [setDeleteNotes, setNotes, deleteNotes]
  );

  const removeNote = useCallback(
    (deleteNote) => {
      const updatedNotes = deleteNotes.filter(
        (data) => data.id !== deleteNote.id
      );
      setDeleteNotes(updatedNotes);
    },
    [deleteNotes, setDeleteNotes]
  );
  const removeNoteHandler = useCallback(() => {
    removeNote(deleteNote);
  }, [removeNote, deleteNote]);
  const restoreNoteHandler = useCallback(() => {
    restoreNote(deleteNote);
  }, [restoreNote, deleteNote]);

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
