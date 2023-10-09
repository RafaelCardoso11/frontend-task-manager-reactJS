import { Navigate, Route } from "react-router-dom";

import { ListTask } from "@/pages/ListTask";
import { Task } from "@/pages/Task";
import { Sign } from "./pages/Sign";
import { ProtectedElement } from "./contexts/auth/components/ProtectedElement";
import { Layout } from "./layout";

export const routers = [
  <Route key="login" path="/login" element={<Sign />} />,
  <Route key="register" path="/register" element={<Sign />} />,
  <Route
    path="/"
    key="list"
    element={
      <ProtectedElement>
        <Layout
          main={{
            title: "Listagem de Tarefas",
            subtitle:
              "A página de listagem de tarefas exibe todas as tarefas disponíveis. Você pode marcar uma tarefa como concluída, visualizar os detalhes da tarefa, editá-la, excluí-la e adicionar novas tarefas.",
            element: <ListTask />,
          }}
        />
      </ProtectedElement>
    }
  />,
  <Route
    key="create"
    path="/criar"
    element={
      <ProtectedElement>
        <Layout
          main={{
            title: "Cadastro de Tarefas",
            subtitle:
              "Para adicionar uma nova tarefa, você pode usar um formulário para inserir os detalhes da tarefa, como título, descrição e data de vencimento. Após preencher os campos, clique no botão 'Cadastrar Tarefa' para criar a nova tarefa.",
            element: <Task />,
          }}
        />
      </ProtectedElement>
    }
  />,
  <Route
    key="view"
    path="/visualizar/:id"
    element={
      <ProtectedElement>
        <Layout
          main={{
            title: "Visualização da Tarefa",
            subtitle: "Você pode ver os detalhes de uma tarefa específica.",
            element: <Task />,
          }}
        />
      </ProtectedElement>
    }
  />,
  <Route
    key="edit"
    path="/editar/:id"
    errorElement={<>error</>}
    element={
      <ProtectedElement>
        <Layout
          main={{
            title: "Editar Tarefa",
            subtitle:
              "Para editar uma tarefa existente, clique no botão 'Editar Tarefa'. Isso permitirá que você faça alterações nos detalhes da tarefa, como título, descrição e data de vencimento.",
            element: <Task />,
          }}
        />
      </ProtectedElement>
    }
  />,
  <Route key="all" path="*" element={<Navigate to="/" />} />,
];
