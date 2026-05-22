import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";
import "./main.css";
import { store } from "./redux/store.ts";
import { FrameShelfRoutes } from "./FrameShelfRoutes.tsx";
import { AuthProvider } from "@/auth/AuthProvider.tsx";
import { BackendInfoUpdater } from "@/auth/BackendInfoUpdater.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={ store }>
      <AuthProvider>
        <div id="modalRoot" />
        <BackendInfoUpdater />

        <FrameShelfRoutes />

        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          theme="dark"
          position="top-right"
          autoClose={ 3000 }
          draggable={ false }
          transition={ Bounce }
        />
      </AuthProvider>
    </Provider>
  </StrictMode >
);
