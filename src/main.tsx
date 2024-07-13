import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SuspenseComponent from "./components/shared/suspense/Suspense.tsx";
import ErrorBoundary from "./components/shared/errorBoundary/ErrorBoundary.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<SuspenseComponent />}>
      <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
