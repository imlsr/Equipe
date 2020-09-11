import React from "react"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"

import "./App.css"

function App() {
    return (
        <div className="App">
            <Header />
            <div className="app_body">
                <Sidebar />

                {/* sidebar */}
                {/* react-router */}
            </div>
        </div>
    )
}

export default App
