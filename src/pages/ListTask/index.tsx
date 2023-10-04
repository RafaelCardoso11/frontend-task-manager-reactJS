import { Box, Button, Grid, IconButton } from "@mui/material";
import { useState } from "react";

import {
  DataGrid,
  GridDeleteIcon,
  GridRowSelectionModel,
  ptBR,
} from "@mui/x-data-grid";

import { ITask } from "@/interfaces/task.interface";
import { columns } from "./columns";
import { useQuery } from "react-query";
import { TaskService } from "@/services/task.service";
import { Link, useNavigate } from "react-router-dom";
import { ModalConfirm } from "@/components/ModalConfirm";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { ITaskCompletion } from "@/interfaces/taskCompletation.interface";
import { IProps } from "./interfaces/props.interface";
import { toast } from "react-toastify";

const taskService = new TaskService();
export const ListTask: React.FC<IProps> = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [openConfirmDeleteTask, setOpenConfirmDeleteTask] =
    useState<boolean>(false);
  const [idTask, setIdTask] = useState<number>();

  const navigate = useNavigate();

  const {
    data: tasks,
    refetch,
    isLoading,
  } = useQuery<ITask[]>("task", taskService.findAll, {
    onSuccess(tasks) {
      const completedTaskIds = tasks
        .filter(({ completed }) => completed)
        .map(({ id }) => Number(id));
      setSelectedRows(completedTaskIds);
    },
  });

  const handleCheckTasks = async (tasksCompletion: ITaskCompletion[]) =>
    await taskService.updateCompleteMultipleTask(tasksCompletion);

  const handleOnRowSelection = async (ids: GridRowSelectionModel) => {
    const selectedIDs = ids as number[];
    setSelectedRows(selectedIDs);

    if (tasks) {
      const tasksCompletion = tasks.map<ITaskCompletion>(({ id }) => {
        const selectedId = selectedIDs.find(
          (selectedId) => selectedId === Number(id)
        );
        return {
          taskId: Number(id),
          completed: !!selectedId,
        };
      });
      handleCheckTasks(tasksCompletion);
    }
  };

  const handleConfirmDeleteTask = async () => {
    if (idTask) {
      const response = await taskService.remove(idTask);
      if (response) {
        refetch();
        setOpenConfirmDeleteTask(false);
      }
    }
  };

  const handleOpenModalConfirmDeleteTask = async (id: number) => {
    setIdTask(id);
    setOpenConfirmDeleteTask(true);
  };

  const handleRefreshTasks = async () => {
    const { isSuccess } = await refetch();

    if (isSuccess) {
      toast("Tarefas atualizadas com sucesso!", { type: "success" });
    }
  };

  return (
    <Grid item>
      <Box height="65vh">
        <DataGrid
          loading={isLoading}
          rows={tasks || []}
          columns={[
            ...columns,
            {
              field: "actions",
              headerName: "Ações das Tarefas",
              renderCell({ id }) {
                return (
                  <Grid item xs={4}>
                    <Link to={`editar/${id}`}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <Link to={`visualizar/${id}`}>
                      <IconButton color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="error"
                      onClick={() => {
                        handleOpenModalConfirmDeleteTask(Number(id));
                      }}
                    >
                      <GridDeleteIcon />
                    </IconButton>
                  </Grid>
                );
              },
              minWidth: 150,
            },
          ]}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={handleOnRowSelection}
          sortModel={[
            {
              field: "createdAt",
              sort: "desc",
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm="auto">
          <Button
            variant="contained"
            size="large"
            color="warning"
            fullWidth
            onClick={handleRefreshTasks}
          >
            Atualizar dados
          </Button>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button
            variant="contained"
            size="large"
            fullWidth
            color="primary"
            onClick={() => navigate("/criar")}
          >
            Cadastrar tarefa
          </Button>
        </Grid>
      </Grid>
      <ModalConfirm
        title="Excluir Tarefa"
        body="Você realmente deseja excluir essa Tarefa?"
        handleConfirm={handleConfirmDeleteTask}
        open={openConfirmDeleteTask}
        setOpen={setOpenConfirmDeleteTask}
      />
    </Grid>
  );
};
