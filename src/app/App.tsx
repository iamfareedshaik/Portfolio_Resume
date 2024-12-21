import React from "react";
import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { router } from "./routes";
const App: React.FC = () => {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  );
};

export default App;
