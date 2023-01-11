import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getRandomGif, getSpecificGif, getTrending } from './api';
import GifDetail from './Pages/gif-detail';
import Layout from './Pages/Layout'
import Random from './Pages/Random';
import Search from './Pages/Search';
import Trending from './Pages/Trending';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "random",
        element: <Random/>,
        loader: () => {
          return getRandomGif();
        }
      },
      {
        path: "search",
        element: <Search/>,
        loader: () => {
          return getSpecificGif();
        }
      },
      {
        path: "trending",
        element: <Trending/>,
        loader: () => {
          return getTrending();
        },
      },
    ],
  },
  {
    path: "/gif/:gifId",
    element: <GifDetail/>,
    loader: ({params}) => {
      const gifId = params.gifId;
      return getSpecificGif(gifId);
    }
  }
]);

function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App