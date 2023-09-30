import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITask } from "../../interfaces/task.interface";
import { DatePicker } from "../../components/DatePicker";
import { PriorityEnum } from "../../enums/priority.enum";

export const Task = () => {
  const { handleSubmit } = useForm<ITask>();

  const onSubmit: SubmitHandler<ITask> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            name="title"
            variant="outlined"
            label="Titulo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            minRows={4}
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Prioridade</InputLabel>
            <Select
              name="title"
              variant="outlined"
              label="Prioridade"
              color="primary"
              defaultValue={PriorityEnum.LOW}
            >
              <MenuItem value={PriorityEnum.HIGH}>Alta</MenuItem>
              <MenuItem value={PriorityEnum.MEDIUM}>Média</MenuItem>
              <MenuItem value={PriorityEnum.LOW}>Baixa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <DatePicker label="Data de Conclusão" />
        </Grid>

        <Grid
          container
          xs={12}
          margin={2}
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item>
            <Button variant="contained" size="large" color="warning">
              Voltar
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              size="large"
              color="primary"
            >
              Cadastrar Tarefa
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
