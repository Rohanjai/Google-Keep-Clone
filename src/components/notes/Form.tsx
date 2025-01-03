import { useState, useRef, useContext, useCallback } from "react";

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";

import { DataContext } from "../../context/DataProvider";
import { DataContextType, Note } from "../../model/types";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note: Note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const { setNotes } = useContext(DataContext) as DataContextType;

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickAway = useCallback(() => {
    setShowTextField(false);
    if (containerRef.current) {
      containerRef.current.style.minHeight = "30px";
    }
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  }, [setShowTextField, setAddNote, addNote, setNotes]);

  const onTextAreaClick = useCallback(() => {
    setShowTextField(true);
    if (containerRef.current) {
      containerRef.current.style.minHeight = "70px";
    }
  }, [setShowTextField]);

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const changedNote = { ...addNote, [e.target.name]: e.target.value };
      setAddNote(changedNote);
    },
    [setAddNote, addNote]
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={onTextChange}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={onTextChange}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
