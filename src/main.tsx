import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import LocalStorageContextProvider from "./contexts/localStorage/LocalStorageContextProvider";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <LocalStorageContextProvider>
        <RouterProvider router={router} />
      </LocalStorageContextProvider>
    </StrictMode>,
  );
}
