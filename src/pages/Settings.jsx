import MyDrawer from "../Components/MyDrawer";
import { Box } from "@mui/material";
import MyNavbar from "../Components/MyNavbar";
function Settings() {
  return (
    <>
      <MyNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <MyDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Setting Page </h1>
        </Box>
      </Box>
    </>
  );
}
export default Settings;
