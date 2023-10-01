import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Task } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <Grid item>
      <List component="nav">
        <Link to="/" >
          <ListItemButton>
            <ListItemIcon>
              <Task />
            </ListItemIcon>
            <ListItemText primary="Tarefas" />
          </ListItemButton>
        </Link>
      </List>
      <Divider />
    </Grid>
  );
};
