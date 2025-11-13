import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import MealItems from './pages/meal/MealItems'
import Meal from './pages/meal/Meal'

import AboutUs from './pages/aboutUs/AboutUs'
// import Projects from './pages/projects/ProjectPage'
import ProjectPage from './pages/projects/ProjectPage'
import RootLayout from './components/RootLayout'

export default function App() {

  const router =createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'meal-items/:category',
            element: <MealItems/>,
          },
          {
            path: 'meal/:id',
            element: <Meal/>,
          },
          {
            path: 'about-us',
            element: <AboutUs/>
          },
          {
            path: 'projects',
            element: <ProjectPage/>
          },
          // {
          //   path: '/footer',
          //   element: <Footer/>
          // }

        ]

      }
    ],
  )
  return <RouterProvider router={router}/> 
}
