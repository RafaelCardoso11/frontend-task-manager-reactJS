import {   Navigate } from "react-router-dom";
import { IProps } from "./interfaces/props.interface";
import { useAuth } from "../../services/useAuth";
import { Loading } from "@/pages/Loading";

export const ProtectedElement: React.FC<IProps> = ({  children  }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return  <Loading />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }


  return children;
};
