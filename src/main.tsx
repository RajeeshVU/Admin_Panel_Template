import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import SuspenseComponent from "./components/shared/suspense/Suspense.tsx";
import ErrorBoundary from "./components/shared/errorBoundary/ErrorBoundary.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SuspenseComponent />}>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
