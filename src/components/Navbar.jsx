import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction={{ md: "row", sm: "column" }}
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#030334",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant={"h6"}
        sx={{
          color: "white",
          marginLeft: "10px",
        }}
      >
        Tirri <span style={{ color: "red" }}>Media</span>
      </Typography>
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
