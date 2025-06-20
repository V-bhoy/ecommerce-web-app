import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {refreshToken} from "./redux/features/auth/authThunk.js";

function App() {
    const dispatch = useDispatch();

  useEffect(()=>{
      const userLoggedIn = localStorage.getItem("isLoggedIn");
      if(userLoggedIn){
          dispatch(refreshToken());
      }
  },[])

  return <RouterProvider router={router}/>
}

export default App
