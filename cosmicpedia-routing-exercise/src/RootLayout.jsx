import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function RootLayout() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
