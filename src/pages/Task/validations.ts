import * as yup from "yup";
import { minDateISO } from "../../helpers/minDateISO.helper";

export const validationSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string().required("O Título da Tarefa é obrigatório."),
  description: yup.string().optional().nullable(),
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
