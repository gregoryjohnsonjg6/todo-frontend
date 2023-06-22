import React, { useState, useEffect } from "react"
import "./App.css"
import Title from "./component/Title"
import Toolbox from "./component/Toolbox"
import TodoList from "./component/TodoList"
import axios from "axios";
import { API } from './config.js';

const App: React.FC = () => {
    const [todo, setTodo] = useState<any[]>([])
    const [done, setDone] = useState<any[]>([])
    const [search, setSearch] = useState("")
    const [ex, setEx] = useState(true)

    const fetchData = async () => {
        await axios.get(`${API}/getAll`)
        .then(response => {
            setTodo(response.data.data.data);
        });
        await axios.get(`${API}/getAllDone`)
        .then(response => {
            setDone(response.data.data.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const clearAll = async () => {
        setTodo([])
        setDone([])
        await axios.get(`${API}/deleteAll`);
    }

    return (
        <div className="App">
            <Title clearAll={clearAll} />
            <Toolbox setTodo={setTodo} api={API} search={search} setSearch={setSearch} />
            <TodoList
                todo={todo}
                done={done}
                setDone={(e) => {
                    setDone(e)
                    setEx(!ex)
                }}
                setTodo={(e) => {
                    setTodo(e)
                    setEx(!ex)
                }}
                search={search}
            />
        </div>
    )
}

export default App
