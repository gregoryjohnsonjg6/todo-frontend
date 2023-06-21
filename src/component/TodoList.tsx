import React from "react"
import { Row } from "antd"
import TodoItem from "./TodoListItem"

interface ChildProps {
    todo: string[]
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
    done: string[]
    setDone: React.Dispatch<React.SetStateAction<string[]>>
}
const TodoList: React.FC<ChildProps> = ({ todo, done }) => {
    const handleClick = (key: number) => {
        console.log(key)
    }

    return (
        <>
            <Row justify="space-around" style={{ padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <TodoItem
                        todoType="To Do"
                        item={todo}
                        handleClick={handleClick}
                    />
                    <TodoItem
                        todoType="Done"
                        item={done}
                        limit={3}
                        checked
                        handleClick={handleClick}
                    />
                </div>
            </Row>
        </>
    )
}

export default TodoList
