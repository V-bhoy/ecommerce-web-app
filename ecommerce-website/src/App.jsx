import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.js";

function App() {
  return <RouterProvider router={router}/>
}

export default App
