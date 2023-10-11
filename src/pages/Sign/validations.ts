import * as yup from "yup";


const validUsernameRegex =  /^[a-zA-Z0-9_-]+$/
export const validationSchema = yup.object().shape({

  username: yup
    .string()
    .matches(
      validUsernameRegex,
      'Use apenas letras, números, hífens e sublinhados.'
    )
    .max(20, "O máximo de caractéres permitidos nesse campo são 20")
    .required("O Nome de Usuário é obrigatório."),
  email: yup
    .string()
    .email('Insira um E-mail válido')
    .max(127, "O máximo de caractéres permitidos nesse campo são 127")
    .optional(),
  password: yup
    .string()
    .max(127, "O máximo de caractéres permitidos nesse campo são 127")
    .required('A senha é obrigatória')
  
});
