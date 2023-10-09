import { Avatar } from "@mui/material";
import React from "react";
import { IProps } from "./interfaces/props.interface";

export const UserAvatar: React.FC<IProps> = ({ name }) => {

  const generateColor = (text: string) => {
    const colors = ["#2196F3", "#F44336", "#4CAF50", "#FFC107", "#9C27B0"];
    const charCodeSum = text
      .split("")
      .map((char) => char.charCodeAt(0))
      .reduce((sum, charCode) => sum + charCode, 0);
    const colorIndex = charCodeSum % colors.length;
    return colors[colorIndex];
  };
  
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0].toUpperCase()).join("");
  };

  const initials = getInitials(name);
  const backgroundColor = generateColor(name);

  return <Avatar sx={{ bgcolor: backgroundColor }}>{initials}</Avatar>;
};
