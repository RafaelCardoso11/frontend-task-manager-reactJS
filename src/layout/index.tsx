import { Divider, Grid } from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import React from "react";
import { LayoutProps } from "./interfaces/layout-props.interface";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
        <Divider />
      </Grid>
      <Grid container>{children}  </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Footer />
      </Grid>
    </Grid>
  );
};
