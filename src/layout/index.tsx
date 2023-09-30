import { Divider, Grid } from "@mui/material";
import { Header } from "./header";
// import { Sidebar } from "./sidebar";
import { Main } from "./main";
import { Footer } from "./footer";

export const Layout = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
        <Divider />
      </Grid>
      <Grid container minHeight="100vh">
        {/* <Grid
          xs={2}
          style={{ boxShadow: "5px 0px 5px 0px rgba(0,0,0,0.2)" }}
          height="100%"
        >
          <Sidebar />
        </Grid> */}
        <Grid xs={12} height="100%" container>
          <Main />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Footer />
      </Grid>
    </Grid>
  );
};
