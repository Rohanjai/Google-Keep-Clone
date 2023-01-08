import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import Archives from "./archives/Archives";
import DeleteNotes from "./delete/DeleteNotes";
import ErrorPage from "./Error/ErrorPage";
import SignupPage from "./Signup/SignupPage";
import Login from "./Login/Login";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SwipeDrawer />
                <Notes />
              </>
            }
          />
          <Route
            path="/archive"
            element={
              <>
                <SwipeDrawer />
                <Archives />
              </>
            }
          />
          <Route
            path="/delete"
            element={
              <>
                <SwipeDrawer />
                <DeleteNotes />
              </>
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
