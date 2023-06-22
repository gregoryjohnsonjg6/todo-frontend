import React from "react"
import { Row } from "antd"
import TodoItem from "./TodoListItem"
import { API } from './../config';
import axios from 'axios';

interface ChildProps {
    todo: string[]
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
    done: string[]
    setDone: React.Dispatch<React.SetStateAction<string[]>>
    search: string
}
const TodoList: React.FC<ChildProps> = ({ todo, done, setTodo, setDone, search }) => {

    const updateOne = async (id: String) => {
        await axios.get(`${API}/update/${id}`);
    }

    const handleClick1 = (id: String, key: number) => {
        updateOne(id);
        const _pop = todo.splice(key, 1);
        setTodo(todo)
        setDone([...done, _pop[0]]);
    }
    const handleClick2 = async (id: String, key: number) => {
        updateOne(id);
        const _pop = done.splice(key, 1);
        const arr = [...todo, _pop[0]];
        await axios.get(`${API}/getAll`)
        .then(response => {
            setTodo(response.data.data.data);
        });
        await axios.get(`${API}/getAll`)
        .then(response => {
            setTodo(response.data.data.data);
        });
        setDone(done);
    }

    return (
        <>
            <Row justify="space-around" style={{ padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <TodoItem
                        todoType="To Do"
                        item={todo}
                        handleClick={handleClick1}
                        search={search}
                    />
                    <TodoItem
                        todoType="Done"
                        item={done}
                        limit={10}
                        checked
                        handleClick={handleClick2}
                        search={search}
                    />
                </div>
            </Row>
        </>
    )
}

export default TodoList
