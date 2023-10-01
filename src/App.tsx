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
            "A página de lista de tarefas permite que a visualização, marque como concluídas e adicione novas tarefas",
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
          subtitle: "lorem ipsum dolor sit amet, consectetur adip",
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
          subtitle: "lorem ipsum dolor sit amet, consectetur adip",
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
          subtitle: "lorem ipsum dolor sit amet, consectetur adip",
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
