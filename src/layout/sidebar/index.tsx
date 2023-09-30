import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Task } from "@mui/icons-material";
export const Sidebar = () => {
  return (
    <Grid item>
      <List component="nav">
        <ListItemButton>
          <ListItemIcon>
            <Task />
          </ListItemIcon>
          <ListItemText primary="Tarefas" />
        </ListItemButton>
      </List>
      <Divider />
    </Grid>
  );
};
