import {
  Avatar,
  Badge,
  Box,
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
        <IconButton color="inherit">
          <Badge badgeContent={4} style={{ color: "white", marginRight: 10 }}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Avatar
            alt="User Avatar"
            src="https://media.licdn.com/dms/image/D4D03AQG534wNPHhang/profile-displayphoto-shrink_800_800/0/1682369927317?e=1701302400&v=beta&t=amZkkrDQVCGWy7HvQEmMCoewa1EZOPcaYmoNF_e_I_Q"
          />
        </IconButton>
      </Box>
    </Toolbar>
  );
};
