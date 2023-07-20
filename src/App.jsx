import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import OtherProjects from './pages/OtherProjects'
import OrgInternet from './pages/OrgInternet'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home />
    },
    {
      path: '/others', element: <OtherProjects />
    },
    {
      path: '/orgInternet', element: <OrgInternet />
    },
    {},
    {},
    {},
    {}
  ])
  return (

    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
