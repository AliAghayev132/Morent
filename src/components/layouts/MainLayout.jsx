// React Router
import { Outlet } from "react-router";
// Components
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer/>
    </>
}

export default MainLayout;