import { useAuth } from "@/contexts/auth/services/useAuth";
import { Avatar } from "@mui/material";

export const UserAvatar = () => {
    const {  user } = useAuth();


    const generateColor = (text: string) => {
        const colors = ['#2196F3', '#F44336', '#4CAF50', '#FFC107', '#9C27B0'];
        const charCodeSum = text
          .split('')
          .map((char) => char.charCodeAt(0))
          .reduce((sum, charCode) => sum + charCode, 0);
        const colorIndex = charCodeSum % colors.length;
        return colors[colorIndex];
      };


    const getInitials = (name: string) => {
      const nameParts = name.split(' ');
      return nameParts.map((part) => part[0].toUpperCase()).join('');
    };
  

    
    const initials = getInitials(user.username);
    const backgroundColor = generateColor(initials);
  
    return (
      <Avatar sx={{ bgcolor: backgroundColor }}>{initials}</Avatar>
    );
  };