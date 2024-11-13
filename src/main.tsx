import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./components/error/ErrorPage.tsx";
import { PageLayout } from "./pages/PageLayout/PageLayout.tsx";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [{ path: "/", element: <App /> }],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
