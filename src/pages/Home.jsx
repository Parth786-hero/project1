import MyDrawer from "../Components/MyDrawer";
import { Box, Stack, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card1 from "../Components/Card1";
import MyNavbar from "../Components/MyNavbar";
import Card2 from "../Components/Card2";
import Card3 from "../Components/Card3";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MyAccordian from "../Components/MyAccordian";
import CountUp from 'react-countup';

// import Stack from "@mui/material";
// import Stack from '@mui/material/Stack';

function Home() {
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
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                  <Card1
                    bgColor="light-gradient"
                    
                    amount={<CountUp end={498}/>}
                    text="New Target"
                    para="Total Score"
                    icon={<AdsClickIcon />}
                    head="New Look"
                  />
                  <Card1
                    bgColor="dark-gradient"
                    
                    amount={<CountUp end={1999}/>}
                    text="Target Acheived"
                    para="Your data for future reference"
                    icon={<DoneAllIcon />}
                    head="Interactive Ui"
                  />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2} direction="column">
                  <Card2 bgColor="light-gradient" elevate="2" />
                  <Card2 bagColor="" elevate="2" />
                </Stack>
              </Grid>
            </Grid>

            <br />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Card3 />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{ width: "100%", height: { xs: "auto", md: "auto" } }}
                  elevation={0}
                >
                  <CardContent>
                    <Typography
                      className="boldtext"
                      variant="h5"
                      sx={{ mb: 1 }}
                    >
                      New and Smart Accordian
                    </Typography>
                    <Paper elevation={0}>
                      <MyAccordian elevation={0} />
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Home;
