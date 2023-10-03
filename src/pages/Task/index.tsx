import { Button, Grid } from "@mui/material";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { ITask } from "../../interfaces/task.interface";
import { DatePicker } from "../../components/DatePicker";
import { PriorityEnum } from "../../enums/priority.enum";
import { Select } from "../../components/Select/index";
import { InputText } from "../../components/InputText";
import { priorityItems } from "./priorityItems";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { TaskService } from "../../services/Task";
import {  useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { validationSchema } from "./validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProps } from "./interfaces/props.interface";

const taskService = new TaskService();
export const Task: React.FC<IProps> = () => {
  const { id: idTask } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const createTask = useMutation(taskService.create);
  const updateTask = useMutation(taskService.update);

  const isView = pathname.includes("visualizar");

  const { handleSubmit, control, setValue } = useForm<ITask>({
    defaultValues: {
      priority: PriorityEnum.LOW,
      dueDate: new Date().toISOString(),
    },
    resolver: yupResolver(validationSchema) as Resolver<ITask>,
  });

  const { mutate: findOneTask } = useMutation(taskService.findOne, {
    onSuccess(task: ITask) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("dueDate", task.dueDate);
      setValue("priority", task.priority);
    },
    onError() {
      navigate("/");
    },
  });

  useEffect(() => {
    if (idTask) {
      findOneTask(Number(idTask));
    }
  }, [findOneTask, idTask]);

  const onSubmit: SubmitHandler<ITask> = async (data) => {
    if (idTask) {
      updateTask.mutate({ ...data, id: Number(idTask) });
    } else {
     const response = await createTask.mutateAsync(data);

      if (response) {
        navigate("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputText
            control={control}
            name="title"
            label="Titulo"
            disabled={isView}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            control={control}
            name="description"
            label="Descrição da Tarefa"
            multiline
            minRows={4}
            disabled={isView}
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            control={control}
            name="priority"
            label="Prioridade"
            items={priorityItems}
            disabled={isView}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            control={control}
            name="dueDate"
            minDate={dayjs()}
            label="Data de Conclusão"
            disabled={isView}
          />
        </Grid>

        <Grid container margin={2} justifyContent="flex-end" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={() => navigate(-1)}
            >
              Voltar
            </Button>
          </Grid>
          <Grid item>
            {!isView &&
              (idTask ? (
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  color="primary"
                >
                  Editar Tarefa
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  color="primary"
                >
                  Cadastrar Tarefa
                </Button>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
