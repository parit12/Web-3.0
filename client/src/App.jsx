import React from "react"
import { Navbar, Welcome, Footer, Loader, Transaction, Services } from "./component"
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  )
}

export default App
