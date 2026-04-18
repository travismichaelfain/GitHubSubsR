import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import ContentPage from "./ContentPage";
import SpaceContent from "./SpaceContent";
import SpaceContentLayout from "./SpaceContentLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "space-content",
        element: <SpaceContentLayout />,
        children: [
          {
            index: true,
            element: <SpaceContent />,
          },
          {
            path: ":id",
            element: <ContentPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
