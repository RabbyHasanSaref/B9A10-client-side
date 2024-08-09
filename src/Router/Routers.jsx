import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Page/Home/Home";
import Error from "../Page/Shared/Error/Error";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import AddArtCraft from "../Page/AddArtCraft/AddArtCraft";
import AllArtCraft from "../Page/AllArtCraft/AllArtCraft";
import MyArtCraft from "../Page/MyArtCraft/MyArtCraft";
import ViewPage from "../component/ViewPage";
import Update from "../Page/Update/Update";
import ProtectRouter from "../Auth/ProtectRouter";
import Category from "../Page/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://art-craft-server-side-theta.vercel.app/artcraft`),
      },
      {
        path: "/addartcraft",
        element: <ProtectRouter>
          <AddArtCraft></AddArtCraft>
        </ProtectRouter>,
      },
      {
        path: "/update/:id",
        element: <ProtectRouter>
          <Update></Update>
        </ProtectRouter>,
        loader: ({ params }) => fetch(`https://art-craft-server-side-theta.vercel.app/artcraft/${params.id}`),
      },
      {
        path: "/allartcraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('https://art-craft-server-side-theta.vercel.app/artcraft'),
      },
      {
        path: "/myartcraft",
        element: <ProtectRouter>
          <MyArtCraft></MyArtCraft>
        </ProtectRouter>,
        loader: () => fetch('https://art-craft-server-side-theta.vercel.app/artcraft'),
      },
      {
        path: "/viewpage/:id",
        element: <ProtectRouter>
          <ViewPage></ViewPage>
        </ProtectRouter>,
        loader: () => fetch(`https://art-craft-server-side-theta.vercel.app/artcraft`)
      },
      {
        path: "/category/:category",
        element: <Category></Category>,
        loader: () => fetch(`https://art-craft-server-side-theta.vercel.app/artcraft`)
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ]
  },
]);

export default router;