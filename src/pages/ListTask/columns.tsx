import { GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { PriorityEnum } from "../../enums/priority.enum";
import { Chip, Grid, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatterDate } from "../../helpers/formatterDate";
import { Link } from "react-router-dom";
import { TaskService } from "../../services/Task";

const taskService = new TaskService();
export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "completed",
    headerName: "Status",
    width: 150,
    renderCell({ row: { completed } }) {
      return completed ? "Feita" : "Não feita";
    },
  },
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
      return formatterDate(date);
    },
  },
  {
    field: "DueDate",
    headerName: "Data de Conclusão",

    minWidth: 150,
    renderCell(params) {
      const date = params.row.dueDate;
      return formatterDate(date);
    },
  },
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
            onClick={() => taskService.remove(Number(id))}
          >
            <GridDeleteIcon />
          </IconButton>
        </Grid>
      );
    },
    minWidth: 150,
  },
];
