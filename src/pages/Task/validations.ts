import * as yup from "yup";
import { minDateISO } from "../../helpers/minDateISO.helper";

export const validationSchema = yup.object().shape({
  id: yup.number(),
  title: yup
    .string()
    .max(127, "O máximo de caractéres permitidos nesse campo são 127")
    .required("O Título da Tarefa é obrigatório."),
  description: yup
    .string()
    .max(300, "O máximo de caractéres permitidos nesse campo são 300")
    .optional()
    .nullable(),
  priority: yup.string().required("A Prioridade é obrigatória"),
  dueDate: yup
    .string()
    .transform((dueDate) => new Date(dueDate).toISOString())
    .test(
      "minDate",
      "A Data de Conclusão permite somente a data atual ou futura.",
      (value) => minDateISO(new Date(), value as string)
    ),
});
