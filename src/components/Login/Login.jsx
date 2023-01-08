import { React, useCallback } from "react";
import {
  Grid,
  Box,
  CssBaseline,
  TextField,
  Avatar,
  Button,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material/";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button>Forgot password?</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button>Don't have an account? Sign Up</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/"
                  style={{ textDecoration: "none", paddingLeft: 175 }}
                >
                  <Button>Home</Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
