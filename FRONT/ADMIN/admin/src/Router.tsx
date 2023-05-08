import { useRoutes } from "react-router-dom";
import AppLayout from "./component/sidebar/AppLayout";
import Admin from "./component/Page/Admin/Admin";
import Categorie from "./component/Page/categorie/Categorie";
import Produit from "./component/Page/produits/Produit";
import Commande from "./component/Page/Commandes/Commande";
import Login from "./component/Page/Login/login";

export default function Router() {
  return useRoutes([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Categorie />,
        },
        {
          path: "/Categorie",
          element: <Categorie />,
        },
        {
          path: "/Produit",
          element: <Produit />,
        },
        {
          path: "/Commande",
          element: <Commande />,
        },
        {
          path: "/Admin",
          element: <Admin />,
        },
        {
          path:"/Login",
          element:<Login/>,
        }
      ],
    },
  ]);
}
