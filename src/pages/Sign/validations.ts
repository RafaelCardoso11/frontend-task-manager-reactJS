import * as yup from "yup";


export const validationSchema = yup.object().shape({

  username: yup
    .string()
    .max(127, "O máximo de caractéres permitidos nesse campo são 127")
    .required("O Nome de Usuário é obrigatório."),
  email: yup
    .string()
    .max(127, "O máximo de caractéres permitidos nesse campo são 127")
    .optional(),
  password: yup
    .string()
    .max(127, "O máximo de caractéres permitidos nesse campo são 300")
    .required('A senha é obrigatória')
  
});
