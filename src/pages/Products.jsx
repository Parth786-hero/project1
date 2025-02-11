import MyDrawer from "../Components/MyDrawer";
import { Box } from "@mui/material";
import MyNavbar from "../Components/MyNavbar";
import MyTable from "../Components/MyTable";

function Products() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "rgba(128, 128, 128, .2)",
        }}
      >
        <MyNavbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <MyDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <MyTable/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Products;
