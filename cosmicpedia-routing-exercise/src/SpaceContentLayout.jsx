import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function SpaceContentLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SpaceContentLayout;
