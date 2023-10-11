import { InputText } from "@/components/InputText";
import { IAuth } from "@/interfaces/auth.interface";
import { AuthService } from "@/services/auth.service";
import { Task } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IProps } from "./interfaces/props.interface";
import { useMutation } from "react-query";
import { useAuth } from "@/contexts/auth/services/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validations";
import { useEffect } from "react";

const authService = new AuthService();
export const Sign: React.FC<IProps> = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { control, handleSubmit } = useForm<IAuth>({
    resolver: yupResolver(validationSchema) as Resolver<IAuth>,
  });

  const isLogin = pathname.split("/")[1].includes("login");
  const loginAuth = useMutation(authService.login);
  const registerUser = useMutation(authService.register);

  const handleSign = async (data: IAuth) => {
    if (isLogin) {
      return loginAuth.mutateAsync(data);
    }
    return registerUser.mutateAsync(data);
  };

  const onSubmit: SubmitHandler<IAuth> = async (data) => {
    const { tokens, user } = await handleSign(data);

    if (tokens) {
      login({
        tokens,
        user,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

 

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 15,
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <Box
        component="form"
        sx={{ m: 3 }}
        onSubmit={handleSubmit(onSubmit)}
        style={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          padding: 30,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          marginBottom={2}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Task />
          </Avatar>
          <Typography component="h1" variant="h5">
            Gerenciamento de Tarefas
          </Typography>
        </Grid>
        <Grid container spacing={2} maxWidth={400}>
          <Grid item xs={12}>
            <InputText
              control={control}
              name="username"
              label="Nome de Usuário"
            />
          </Grid>
          {!isLogin ? (
            <Grid item xs={12}>
              <InputText
                control={control}
                name="email"
                type="email"
                label="E-mail"
              />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <InputText
              control={control}
              name="password"
              type="password"
              label="Senha"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </Button>
        <Divider
          sx={{
            margin: "16px 0",
            width: "100%",
          }}
        />

        <Grid container>
          <Grid item>
            <Typography variant="body2">
              {isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to={isLogin ? "/register" : "/login"}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLogin ? "Cadastrar" : "Entrar"}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
