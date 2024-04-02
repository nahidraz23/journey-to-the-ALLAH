import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className="min-h-screen">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;