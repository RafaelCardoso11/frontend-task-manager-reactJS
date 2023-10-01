import { Box, Button, Grid } from "@mui/material";
import { ReactNode, useState } from "react";

import { DataGrid, GridRowSelectionModel, ptBR } from "@mui/x-data-grid";

import { ITask } from "../../interfaces/task.interface";
import { columns } from "./columns";
import { useQuery } from "react-query";
import { TaskService } from "../../services/Task";
import { useNavigate } from "react-router-dom";

const taskService = new TaskService();
interface props {
  children?: ReactNode;
}
export const ListTask: React.FC<props> = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const navigate = useNavigate();

  const { data: tasks } = useQuery<ITask[]>("task", taskService.findAll, {
    onSuccess(tasks) {
      setSelectedRows(
        tasks.filter(({ completed }) => completed).map(({ id }) => id)
      );
    },
  });

  const handleCheckTasks = async (ids: number[]) =>
    await taskService.completeMultipleTask(ids);

  const handleOnRowSelection = async (ids: GridRowSelectionModel) => {
    const selectedIDs = ids as number[];
    setSelectedRows(selectedIDs);
    handleCheckTasks(selectedIDs);
  };

  return (
    <Grid item>
      <Box height="65vh">
        <DataGrid
          rows={tasks || []}
          columns={columns}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={handleOnRowSelection}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <Grid container spacing={2} marginTop={2}>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => navigate("/criar")}
          >
            Cadastrar tarefa
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
