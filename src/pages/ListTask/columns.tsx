import { GridColDef } from "@mui/x-data-grid";
import { PriorityEnum } from "@/enums/priority.enum";
import { Chip, Stack } from "@mui/material";
import { formatterDate } from "@/helpers/formatterDate.helper";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },

  { field: "title", headerName: "Titulo", width: 250 },
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
    field: "completed",
    width: 150,
    headerName: "Status",
    renderCell({ row: { completed } }) {
      return completed ? "Concluída" : "Não Concluída";
    },
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
];
