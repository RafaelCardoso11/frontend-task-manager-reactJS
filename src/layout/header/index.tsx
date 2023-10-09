import {
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Logout } from "@mui/icons-material";
import { useAuth } from "@/contexts/auth/services/useAuth";
import { UserAvatar } from "@/components/UserAvatar";
import { ModalConfirm } from "@/components/ModalConfirm";
import { useState } from "react";

export const Header = () => {
  const theme = useTheme();
  const { logout, user } = useAuth();
  const [openConfirmLogout, setOpenConfirmLogout] = useState<boolean>(false);

  const handleOpenModalConfirmLogout = () => {
    setOpenConfirmLogout(true);
  };
  const handleConfirmLogout = () => {
    logout();
    setOpenConfirmLogout(false);
  };
  return (
    <Toolbar
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between ">
        <Grid item xs={8}>
          <IconButton edge="start" style={{ color: "white", gap: 10 }}>
            <MenuIcon />
            <Typography component="h1" variant="h6" color="white">
              Gerenciamento de Tarefas
            </Typography>
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton color="inherit">
            <Badge
              badgeContent={user.username.length}
              style={{ color: "white", marginRight: 10 }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Typography
              component="span"
              variant="body1"
              color="white"
              marginRight={2}
            >
              @{user.username}
            </Typography>
            {user.username && <UserAvatar name={user.username} />}
          </IconButton>
          <IconButton
            style={{ color: "white", marginLeft: 10 }}
            onClick={handleOpenModalConfirmLogout}
          >
            <Typography
              component="span"
              variant="body1"
              color="white"
              marginRight={1}
            >
             Sair
            </Typography>
            <Logout  />
          </IconButton>
        </Grid>
      </Grid>

      <ModalConfirm
        title="Sair"
        body="Você realmente deseja sair da gestão de tarefas?"
        handleConfirm={handleConfirmLogout}
        btnConfirmText="Sair"
        open={openConfirmLogout}
        setOpen={setOpenConfirmLogout}
      />
    </Toolbar>
  );
};
