import { Grid, Typography } from "@mui/material";
import { MainProps } from "../interfaces/main-props.interface";

export const Main: React.FC<MainProps> = ({ title, subtitle, element }) => {
  return (
    <Grid
      style={{
        padding: 30,
      }}
      container
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h5">
          {title}
        </Typography>

        <Typography component="p" variant="body1">
          {subtitle}
        </Typography>
      </Grid>

      <Grid item marginTop={4} xs={12}>
        {element}
      </Grid>
    </Grid>
  );
};
