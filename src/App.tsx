import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from "./layout";
import { ListTask } from "./pages/ListTask";
import { Task } from "./pages/Task";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout
        main={{
          title: "Listagem de Tarefas",
          subtitle:
            "A página de listagem de tarefas exibe todas as tarefas disponíveis. Você pode marcar uma tarefa como concluída, visualizar os detalhes da tarefa, editá-la, excluí-la e adicionar novas tarefas.",
          element: <ListTask />,
        }}
      />
    ),
    children: [],
  },
  {
    path: "criar",
    element: (
      <Layout
        main={{
          title: "Cadastro de Tarefas",
          subtitle:
            "Para adicionar uma nova tarefa, você pode usar um formulário para inserir os detalhes da tarefa, como título, descrição e data de vencimento. Após preencher os campos, clique no botão 'Cadastrar Tarefa' para criar a nova tarefa.",
          element: <Task />,
        }}
      />
    ),
  },
  {
    path: "visualizar/:id",
    element: (
      <Layout
        main={{
          title: "Visualização da Tarefa",
          subtitle: "Você pode ver os detalhes de uma tarefa específica.",
          element: <Task />,
        }}
      />
    ),
  },
  {
    path: "editar/:id",
    element: (
      <Layout
        main={{
          title: "Editar Tarefa",
          subtitle:
            "Para editar uma tarefa existente, clique no botão 'Editar Tarefa'. Isso permitirá que você faça alterações nos detalhes da tarefa, como título, descrição e data de vencimento.",
          element: <Task />,
        }}
      />
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
