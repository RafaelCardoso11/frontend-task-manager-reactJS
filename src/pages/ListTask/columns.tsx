import { GridColDef } from "@mui/x-data-grid";
import { PriorityEnum } from "../../enums/priority.enum";
import { Chip, Grid, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Titulo", width: 150 },
  { field: "description", headerName: "Descrição", width: 300 },
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
      console.log(params.row);
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
