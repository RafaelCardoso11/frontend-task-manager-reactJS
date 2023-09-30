import { PriorityEnum } from "../../enums/priority.enum";

interface Priority {
  value: string;
  label: string;
}

export const priorityItems: Priority[] = [
  {
    value: PriorityEnum.HIGH,
    label: "Alta",
  },
  {
    value: PriorityEnum.MEDIUM,
    label: "Média",
  },
  {
    value: PriorityEnum.LOW,
    label: "Baixa",
  },
];
