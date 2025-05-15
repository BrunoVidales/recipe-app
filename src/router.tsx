import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { IndexPage } from "./views/IndexPage/IndexPage";
import { FavoritesPage } from "./views/FavoritesPage/FavoritesPage";
import { DetailsPage } from "./views/DetailsPage/DetailsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<IndexPage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};
