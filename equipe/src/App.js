import React from "react"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import Chat from "./Components/Chat/Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div className="app_body">
                    <Sidebar />
                    {/* react-router -> Chat Screen*/}
                    <Switch>
                        <Route path="/room/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <h1>Welcome!</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
