// React Router
import { BrowserRouter, Route, Routes } from "react-router";
// Pages
import HomePage from "../pages/Home/HomePage";
import DetailPage from "../pages/Detail/DetailPage";
import PaymentPage from "../pages/Payment/PaymentPage";
import CategoryPage from "../pages/Category/CategoryPage";
// Components
import MainLayout from "../components/layouts/MainLayout";


const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/category" element={<CategoryPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
};

export default AppRouter;