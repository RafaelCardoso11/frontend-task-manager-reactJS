import { Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid height="3rem">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Grid>
  );
};
