import React, { useState } from "react"
import Header from "./component/Header"
import Home from "./component/Home"
import Sidebar from "./component/Sidebar"
import "./App.css"
import { ThemeProvider } from "styled-components"
import { createTheme } from "@mui/material"
const App = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div style={{ display: "flex" }}>
      <div className="smooth-trasition">{SidebarOpen && <Sidebar />}</div>
      <div style={{ width: "100%" }} className="">
        <Header SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Home />
      </div>
    </div>
  )
}

export default App
