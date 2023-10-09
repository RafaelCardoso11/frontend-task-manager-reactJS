import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { routers } from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>{routers}</Routes>
      </AuthProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
