import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
export const Sidebar = () => {
  return (
    <Grid  >
      <List component="nav">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tarefas" />
        </ListItemButton>
      </List>
      <Divider />
    </Grid>
  );
};
