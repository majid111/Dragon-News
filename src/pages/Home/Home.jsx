import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6">
                <div className="border-black border-2"><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2 border-black border-2">
                <h2 className="text-3xl font-poppins">This is home</h2>
                </div>
                <div className="border-black border-2"><RightSideNav></RightSideNav></div>
            </div>
            
        </div>
    );
};

export default Home;