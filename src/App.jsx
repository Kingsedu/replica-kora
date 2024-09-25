import { Route,
        createBrowserRouter,
        RouterProvider,
        createRoutesFromElements
        } from "react-router-dom";
import SignInForm from "./components/SignInForm/SignInForm";
import "./App.css"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<SignInForm/>}></Route>
    </>
  )
)
function App() {

  return (
    <div className="App body_main">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
