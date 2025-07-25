import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom"
import Router from "./Routes/Router.jsx"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
)
