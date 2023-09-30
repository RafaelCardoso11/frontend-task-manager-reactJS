import { Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { DataGrid, ptBR } from "@mui/x-data-grid";

import { ITask } from "../../interfaces/task.interface";
import { columns } from "./columns";

export const List = () => {
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

  const handleSelectedRows = async (ids: number[]) => {
    await axios.patch("http://localhost:3000/task/completeTasks", {
      taskIds: ids,
    });
  };

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
        rows={tasks}
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
