import React from 'react'
import Login from './Login';
import Error from './Error';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accordian from './Accordian';
import NestedComments from './NestedComments';
import ImageSlider from './ImageSlider';
import YoutubeChat from './YoutubeChat';
import AutocompleteSearch from './AutocompleteSearch';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/error',
      element: <Error />
    },
    {
      path: '/gpt-search',
      element: <Browse />
    },
    {
      path: '/accordian',
      element: <Accordian />
    },
    {
      path: 'nested-comments',
      element: <NestedComments />
    },
    {
      path: '/image-slider',
      element: <ImageSlider />
    },
    {
      path: '/youtube-chat',
      element: <YoutubeChat />
    },
    {
      path: "/autocomplete-search",
      element: <AutocompleteSearch />
    }
  ]);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default Body;