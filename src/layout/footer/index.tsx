import { Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid height="3rem">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.linkedin.com/in/rafaelcardoso11/"  target="_blank">
          Rafael Cardoso
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Grid>
  );
};
