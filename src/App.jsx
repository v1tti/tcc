import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { GlobalUserProvider } from "./context/use-global-user.context";

function App() {
  return (
    <>
      <GlobalUserProvider>
        <RouterProvider router={router} />
      </GlobalUserProvider>
    </>
  );
}

export default App;
