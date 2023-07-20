import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import OtherProjects from './pages/OtherProjects'
import OrgInternet from './pages/OrgInternet'
import MentelHealth from './pages/MentelHealth'
import DataAnalysis from './pages/DataAnalysis'
import CourseProject from './pages/CourseProject'
import Websites from './pages/Websites'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/course-projecs', element: <CourseProject /> },
    { path: '/data-analysis', element: <DataAnalysis /> },
    { path: '/webises', element: <Websites /> },
    { path: '/mentel-health', element: <MentelHealth /> },
    { path: '/orgInternet', element: <OrgInternet /> },
    { path: '/others', element: <OtherProjects /> }
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
