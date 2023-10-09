import { Divider, Grid, useMediaQuery } from "@mui/material";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import React from "react";
import { LayoutProps } from "./interfaces/layout-props.interface";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
        <Divider />
      </Grid>
      <Grid container>
        {matches ? (
          <Grid
            item
            xs={2}
            style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)" }}
            height={"90vh"}
          >
            <Sidebar />
          </Grid>
        ) : null}
        <Grid xs={12} sm={12} md={10} lg={10} item height="100%">
          {children}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Footer />
      </Grid>
    </Grid>
  );
};
