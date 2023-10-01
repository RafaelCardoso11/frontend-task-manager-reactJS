import { Divider, Grid } from "@mui/material";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Main } from "./main";
import { Footer } from "./footer";
import React from "react";
import { LayoutProps } from "./interfaces/layout-props.interface";




export const Layout: React.FC<LayoutProps> = ({ main }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
        <Divider />
      </Grid>
      <Grid container minHeight="100vh">
        <Grid
          item
          xs={2}
          style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)" }}
        >
          <Sidebar />
        </Grid>
        <Grid xs={10} item height="100%">
          <Main {...main} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Footer />
      </Grid>
    </Grid>
  );
};
