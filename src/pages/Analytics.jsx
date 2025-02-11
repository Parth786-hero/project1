import MyDrawer from "../Components/MyDrawer";
import { Box, Stack } from "@mui/material";
import MyNavbar from "../Components/MyNavbar";
import Grid from "@mui/material/Grid2";
import Card4 from "../Components/Card4";
import Card5 from "../Components/Card5";
import Card6 from "../Components/Card6";
import Card7 from "../Components/Card7";
// import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
import Animated from "../graphs/Animated";
function Analytics() {
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
              <Grid size={{xs : 12 , md : 5}}>
                <Stack spacing={1} direction="row">
                  <Card4 text="Traffic" num={<CountUp end={20001}/>} para="People are visiting this site" theme="light-gradient"/>
                  <Card4 text="Visitors" num={<CountUp end={1267}/>} para="site is getting noticed ." theme="drk-gradient"/>
                </Stack>
                <Box sx={{m : ".8rem 0"}}/>
                <Stack spacing={1} direction="row">
                  <Card4 text="Website Hosting" num={<CountUp end={786}/>} para="Our Dashboard is quiet active" theme="dak-gradient"/>
                  <Card4 text="React MUI" num={<CountUp end={1198}/>} para="Very famous framework for UI" theme="dark-gradient"/>
                </Stack>
              </Grid>
              <Grid size={{xs : 12 , md : 7}}>
                <Card5 />
              </Grid>
            </Grid>

            <br/>

            <Grid container spacing={2}>
              <Grid size={{xs : 12 , md : 7}}>
                <Card7 />
              </Grid>
              <Grid size={{xs : 12 , md : 5}}>
                <Card6 />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Analytics;
