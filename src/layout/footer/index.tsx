import { Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Grid item height="3rem">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/rafaelcardoso11/"
          target="_blank"
        >
          Rafael Cardoso
        </Link>{" "}
        {currentYear}
        {"."}
      </Typography>
    </Grid>
  );
};
