import React from "react"
import { Row } from "antd"
import TodoItem from "./TodoListItem"

interface ChildProps {
    todo: string[]
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
    done: string[]
    setDone: React.Dispatch<React.SetStateAction<string[]>>
}
const TodoList: React.FC<ChildProps> = ({ todo, done, setTodo, setDone }) => {
    const handleClick1 = (key: number) => {
        const _pop = todo.splice(key, 1)
        done.push(_pop[0])
        setTodo(todo)
        setDone(done)
    }
    const handleClick2 = (key: number) => {
        const _pop = done.splice(key, 1)
        todo.push(_pop[0])
        setTodo(todo.sort())
        setDone(done)
    }

    return (
        <>
            <Row justify="space-around" style={{ padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <TodoItem
                        todoType="To Do"
                        item={todo}
                        handleClick={handleClick1}
                    />
                    <TodoItem
                        todoType="Done"
                        item={done}
                        limit={3}
                        checked
                        handleClick={handleClick2}
                    />
                </div>
            </Row>
        </>
    )
}

export default TodoList
