import { Outlet } from "react-router-dom";
import Footers from "../component/Shared/Footer/Footers";
import Navbar from "../component/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-354px)]">
        <Outlet />
      </div>
      <Footers />
    </div>
  );
};

export default Main;
