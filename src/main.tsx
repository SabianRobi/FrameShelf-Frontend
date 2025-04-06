import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.tsx";
import "./main.css";
import { ActorDetails } from "./pages/ActorDetails.tsx";
import { Home } from "./pages/Home.tsx";
import { LikedActors } from "./pages/LikedActors.tsx";
import { LikedMovies } from "./pages/LikedMovies.tsx";
import { MovieDetails } from "./pages/MovieDetails.tsx";
import { Profile } from "./pages/Profile.tsx";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
