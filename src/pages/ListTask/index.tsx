import { Box } from "@mui/material";
import { useState } from "react";

import { DataGrid, ptBR } from "@mui/x-data-grid";

import { ITask } from "../../interfaces/task.interface";
import { columns } from "./columns";
import { useQuery } from "react-query";
import { TaskService } from "../../services/Task";

const { completeMultipleTask, findAll } = new TaskService();

export const List = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const { data: tasks } = useQuery<ITask[]>("task", findAll, {
    onSuccess(tasks) {
      setSelectedRows(
        tasks.filter(({ completed }) => completed).map(({ id }) => id)
      );
    },
  });

  const handleSelectedRows = async (ids: number[]) =>
    await completeMultipleTask(ids);

  return (
    <Box
      sx={{
        minHeight: "100%",
        maxHeight: "100%",
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={tasks || []}
        columns={columns}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rowSelectionModel={selectedRows}
        onRowSelectionModelChange={(ids) => {
          const selectedIDs = ids as number[];
          setSelectedRows(selectedIDs);
          handleSelectedRows(selectedIDs);
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
  );
};
