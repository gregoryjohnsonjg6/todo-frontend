import React, { useState } from "react"
import "./App.css"
import Title from "./component/Title"
import Toolbox from "./component/Toolbox"
import TodoList from "./component/TodoList"

const App: React.FC = () => {
    const [todo, setTodo] = useState<any[]>([])
    const [done, setDone] = useState<any[]>([])

    const clearAll = () => {
        setTodo([])
        setDone([])
    }

    return (
        <div className="App">
            <Title clearAll={clearAll} />
            <Toolbox setTodo={setTodo} />
            <TodoList
                todo={todo}
                done={done}
                setDone={setDone}
                setTodo={setTodo}
            />
        </div>
    )
}

export default App
