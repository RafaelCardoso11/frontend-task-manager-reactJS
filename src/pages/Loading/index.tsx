import { Task } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, Typography } from "@mui/material";

import { IProps } from "./interfaces/props.interface";

export const Loading: React.FC<IProps> = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <Task />
      </Avatar>
      <Typography component="h1" variant="h5">
        Gerenciamento de Tarefas
      </Typography>
      <CircularProgress style={{ marginTop: 100 }} />
    </Box>
  );
};
