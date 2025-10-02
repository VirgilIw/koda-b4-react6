import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ArticleDetail from "./pages/ArticleDetail";
import Layout from "./layouts/Layout";
import SearchPage from "./pages/SearchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "article/:author/:slug",
          element: <ArticleDetail />,
        },
        {
          path: "/search-page",
          element: <SearchPage />,
        },
      ],
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
