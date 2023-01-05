import { useCallback, useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  UnarchiveOutlined as Unarchive,
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

const Archive = ({ archive }) => {
  const { archiveNotes, setNotes, setAcrchiveNotes, setDeleteNotes } =
    useContext(DataContext);

  const unArchiveNote = useCallback(
    (archive) => {
      const updatedNotes = archiveNotes.filter(
        (data) => data.id !== archive.id
      );
      setAcrchiveNotes(updatedNotes);
      setNotes((prevArr) => [archive, ...prevArr]);
    },
    [setAcrchiveNotes, setNotes, archiveNotes]
  );

  const deleteNote = useCallback(
    (archive) => {
      const updatedNotes = archiveNotes.filter(
        (data) => data.id !== archive.id
      );
      setAcrchiveNotes(updatedNotes);
      setDeleteNotes((prevArr) => [archive, ...prevArr]);
    },
    [setAcrchiveNotes, setDeleteNotes, archiveNotes]
  );
  const unArchiveHandler = useCallback(() => {
    unArchiveNote(archive);
  }, [archive, unArchiveNote]);
  const deleteNoteHandler = useCallback(() => {
    deleteNote(archive);
  }, [archive, deleteNote]);
  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={unArchiveHandler}
        />
        <Delete fontSize="small" onClick={deleteNoteHandler} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
