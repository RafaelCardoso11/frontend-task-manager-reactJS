import { Button, Grid } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { ITask } from "../../interfaces/task.interface";
import { DatePicker } from "../../components/DatePicker";
import { PriorityEnum } from "../../enums/priority.enum";
import { Select } from "../../components/Select/index";
import { InputText } from "../../components/InputText";
import { priorityItems } from "./priorityItems";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { TaskService } from "../../services/Task";

const { create } = new TaskService();
export const Task = () => {
  const { handleSubmit, control } = useForm<ITask>({
    defaultValues: {
      priority: PriorityEnum.LOW,
    },
  });

  const task = useMutation(create, {
    onSuccess(data) {
      console.log(data, "SUCESS");
    },
  });

  const onSubmit: SubmitHandler<ITask> = (data) => task.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputText control={control} name="title" label="Titulo" />
        </Grid>
        <Grid item xs={12}>
          <InputText
            control={control}
            name="description"
            label="Descrição da Tarefa"
            multiline
            minRows={4}
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            control={control}
            name="priority"
            label="Prioridade"
            items={priorityItems}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            control={control}
            name="dueDate"
            minDate={dayjs()}
            label="Data de Conclusão"
          />
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
