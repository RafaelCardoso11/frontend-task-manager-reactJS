/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const Main = () => {
  const theme = useTheme();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const tasks = await axios.get("localhost:3000/tasks");
      console.log(tasks);
      setTasks(tasks.data);
    };
    handleFetch();
  }, []);
  return (
    <Grid
      style={{
        backgroundColor: theme.palette.grey[200],
        padding: 30,
      }}
      xs={12}
    >
      <Grid xs={12}>
        <Typography component="h4" variant="h5">
          Listagem de Tarefas
        </Typography>

        <Typography component="p" variant="body1">
          A página de lista de tarefas permite que a visualização, marque como
          concluídas e adicione novas tarefas
        </Typography>
      </Grid>

      <Grid padding={3} container gap={4}>
        {tasks.map((data: any) => (
          <Card style={{ width: "100%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
               { data.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              { data.description }
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};
