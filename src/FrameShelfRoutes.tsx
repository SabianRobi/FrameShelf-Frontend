import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes as Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout.tsx";


export const FrameShelfRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="users">
                        <Route path=":userId">
                            <Route index element={<Profile />} />
                            <Route path="movies" element={<LikedMovies />} />
                            <Route path="actors" element={<LikedActors />} />
                        </Route>
                    </Route>
                    <Route path="movie/:movieId" element={<MovieDetails />} />
                    <Route path="actor/:actorId" element={<ActorDetails />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
