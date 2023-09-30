/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Chip, Grid, IconButton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ITask } from "../../interfaces/task.interface";
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { PriorityEnum } from "../../enums/priority.enum";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", minWidth: 150 },
  { field: "title", headerName: "Titulo", minWidth: 150 },
  { field: "description", headerName: "Descrição", minWidth: 160 },
  {
    field: "priority",
    headerName: "Prioridade",
    renderCell(params) {
      const colorFromPriority =
        params.row.priority === PriorityEnum.HIGH
          ? "error"
          : params.row.priority === PriorityEnum.MEDIUM
          ? "warning"
          : "primary";

      const labelFromPriority =
        params.row.priority === PriorityEnum.HIGH
          ? "Alta"
          : params.row.priority === PriorityEnum.MEDIUM
          ? "Media"
          : "Baixa";
      return (
        <Stack direction="row" spacing={1}>
          <Chip
            label={labelFromPriority}
            color={colorFromPriority}
            variant="outlined"
          />
        </Stack>
      );
    },
    minWidth: 150,
  },
  {
    field: "createdAt",
    headerName: "Data de Criação",
    minWidth: 150,
    renderCell(params) {
      const date = params.row.createdAt;
      return new Date(date).toLocaleDateString("pt-BR");
    },
  },
  {
    field: "DueDate",
    headerName: "Data de Conclusão",

    minWidth: 150,
    renderCell(params) {
      const date = params.row.dueDate;
      return new Date(date).toLocaleDateString("pt-BR");
    },
  },
  {
    field: "actions",
    headerName: "Ações das Tarefas",
    renderCell(params) {
      return (
        <Grid item xs={4}>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="primary">
            <VisibilityIcon />
          </IconButton>
        </Grid>
      );
    },
    minWidth: 150,
  },
];

export const Main = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:3000/task");

      const tasks: ITask[] = data;
      setTasks(tasks);
      setSelectedRows(
        tasks.filter(({ completed }) => completed).map(({ id }) => id)
      );
    };
    handleFetch();
  }, []);
  return (
    <Grid
      style={{
        padding: 30,
      }}
      container
    >
      <Grid>
        <Typography component="h4" variant="h5">
          Listagem de Tarefas
        </Typography>

        <Typography component="p" variant="body1">
          A página de lista de tarefas permite que a visualização, marque como
          concluídas e adicione novas tarefas
        </Typography>
      </Grid>

      <Grid container marginTop={2}>
        <Box
          sx={{
            minHeight: "100%",
            maxHeight: "100%",
            height: "100%",
            width: "100%",
          }}
        >
          <DataGrid
            rows={tasks}
            columns={columns}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={(ids) => {
              const selectedIDs = ids as number[];

              setSelectedRows(selectedIDs);
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};
