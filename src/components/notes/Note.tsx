import { useCallback, useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { DataContext } from "../../context/DataProvider.tsx";
import { Note as NoteType , DataContextType} from "../../model/types.ts";

interface NoteProps {
  note: NoteType;
}


const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

function Note({ note }: NoteProps) {
  const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(
    DataContext
  ) as DataContextType;

  const archiveNote = useCallback(
    (note: NoteType) => {
      const updatedNotes = notes.filter((data) => data.id !== note.id);
      setNotes(updatedNotes);
      setAcrchiveNotes((prevArr) => [note, ...prevArr]);
    },
    [setNotes, setAcrchiveNotes, notes]
  );

  const deleteNote = useCallback(
    (note: NoteType) => {
      const updatedNotes = notes.filter((data) => data.id !== note.id);
      setNotes(updatedNotes);
      setDeleteNotes((prevArr) => [note, ...prevArr]);
    },
    [notes, setNotes, setDeleteNotes]
  );

  const archiveHandler = useCallback(() => {
    archiveNote(note);
  }, [archiveNote, note]);

  const deleteHandler = useCallback(() => {
    deleteNote(note);
  }, [deleteNote, note]);

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <MoreVertIcon fontSize="small" />
        <AddAlertIcon fontSize="small" />
        <ImageIcon fontSize="small" />
        <PersonAddIcon fontSize="small" />
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
