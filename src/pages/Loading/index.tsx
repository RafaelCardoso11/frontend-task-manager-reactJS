import { Task } from "@mui/icons-material";
import { Avatar, Box, CircularProgress, Typography } from "@mui/material";

import { IProps } from "./interfaces/props.interface";

export const Loading: React.FC<IProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        justifyContent: "flex-start",
        paddingTop: 15,
        backgroundColor: "white",
        zIndex: 100,
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
