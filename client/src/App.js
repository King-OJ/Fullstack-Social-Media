import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, PrivateRoute, Profile } from "./pages";
import { Alert, MobileNav, NavBar } from "./components";
import { useState } from "react";

function App() {
  const[isMobNavOpen, setIsMobNavOpen]= useState(false)

  function toggleMobileNav(){
    if(isMobNavOpen){
      setIsMobNavOpen(false)
      return;
    }
    setIsMobNavOpen(true)
  }
  
  const htmlElement = document.documentElement;
  const [theme, setTheme]= useState("dark")
  
  function toggleMode(){
    if(htmlElement.classList.contains("dark")){
      htmlElement.classList.remove("dark")
      setTheme("light")
      return;
    }
    htmlElement.classList.add("dark");
    setTheme("dark")
  }

  return (
    <div className="relative">
      <Alert />
      <BrowserRouter>
      <NavBar theme={theme} toggleMode={toggleMode} toggleMobileNav={toggleMobileNav}/>
      <MobileNav theme={theme} toggleMode={toggleMode} isMobNavOpen={isMobNavOpen}/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
