import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: grey;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";

  return (
    <Header open={open} className="header">
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <Menu />
        </IconButton>
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: 30 }} />
        </Link>

        <Heading>Keep</Heading>

        <IconButton
          aria-label="Example"
          style={{
            marginLeft: 1200,
            display: "block",
            float: "right",
            alignItems: "center",
            paddingTop: 13,
          }}
        >
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <AccountCircleIcon />
          </Link>
        </IconButton>
        <IconButton
          aria-label="Example"
          style={{
            display: "block",
            float: "right",
            alignItems: "center",
            paddingTop: 13,
          }}
        >
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PersonAddIcon />
          </Link>
        </IconButton>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
