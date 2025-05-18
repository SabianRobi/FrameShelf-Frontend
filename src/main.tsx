import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { AppLayout } from "./components/layout/AppLayout.tsx";
import "./main.css";
import { ActorDetails } from "./pages/ActorDetails.tsx";
import { Callback } from "./pages/auth/Callback.tsx";
import { Login } from "./pages/auth/Login.tsx";
import { Home } from "./pages/Home.tsx";
import { LikedActors } from "./pages/LikedActors.tsx";
import { LikedMovies } from "./pages/LikedMovies.tsx";
import { MovieDetails } from "./pages/MovieDetails.tsx";
import { Profile } from "./pages/Profile.tsx";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div id="modalRoot" />
      <div id="bodyRoot">
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="users">
                <Route path=":userId">
                  <Route index element={<Profile />} />
                  <Route path="movies" element={<LikedMovies />} />
                  <Route path="actors" element={<LikedActors />} />
                </Route>
              </Route>
              <Route path="movie/:movieId" element={<MovieDetails />} />
              <Route path="actor/:actorId" element={<ActorDetails />} />
              <Route path="auth">
                <Route path="login" element={<Login />} />
                <Route
                  path="login/oauth2/callback/google"
                  element={<Callback />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer
        closeOnClick
        pauseOnFocusLoss
        theme="dark"
        position="top-right"
        autoClose={3000}
        draggable={false}
        transition={Bounce}
      />
    </Provider>
  </StrictMode>
);
