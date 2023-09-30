import {
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Header = () => {
  const theme = useTheme();
  return (
    <Toolbar
      style={{
        backgroundColor: theme.palette.primary.main,
        justifyContent: "space-between",
      }}
    >
      <IconButton edge="start" style={{ color: "white", gap: 10 }}>
        <MenuIcon />
        <Typography component="h1" variant="h6" color="white">
          Gerenciamento de Tarefas
        </Typography>
      </IconButton>

      <Box>
        <Button
          variant="contained"
          color="info"
          style={{ marginRight: 20 }}
        >
          Cadastrar Tarefas
        </Button>
        <IconButton color="inherit">
          <Badge badgeContent={4} style={{ color: "white" }}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
    </Toolbar>
  );
};
