import { Grid, Typography } from "@mui/material";
import { Task } from "../../pages/Task";

export const Main = () => {
  return (
    <Grid
      style={{
        padding: 30,
      }}
      container
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h5">
          Listagem de Tarefas
        </Typography>

        <Typography component="p" variant="body1">
          A página de lista de tarefas permite que a visualização, marque como
          concluídas e adicione novas tarefas
        </Typography>
      </Grid>

      <Grid item marginTop={2} xs={12}>
        <Task />
      </Grid>
    </Grid>
  );
};
