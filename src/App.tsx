import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
