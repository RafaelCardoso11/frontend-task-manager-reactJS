import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";


import { QueryClient, QueryClientProvider } from "react-query";



const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
