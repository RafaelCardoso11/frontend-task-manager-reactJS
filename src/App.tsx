import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Layout } from "./layout";
import { List } from "./pages/ListTask";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "task",
    element: (
      <Layout
        main={{
          title: "Listagem de Tarefas",
          subtitle:
            "A página de lista de tarefas permite que a visualização, marque como concluídas e adicione novas tarefas",
          element: <List />,
        }}
      />
    ),
    children: [
      {
        path: ":id",
        element: (
          <Layout
            main={{
              title: "Cadastro de Tarefas",
              subtitle:
                "A página de lista de tarefas permite que a visualização, marque como concluídas e adicione novas tarefas",
              element: <List />,
            }}
          />
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/task" />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
