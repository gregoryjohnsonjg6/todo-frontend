import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Title from "./component/Title"
import Toolbox from "./component/Toolbox"
import TodoList from "./component/TodoList"

const App: React.FC = () => {
    return (
        <div className="App">
            <Title />
            <Toolbox />
            <TodoList />
        </div>
    )
}

export default App
