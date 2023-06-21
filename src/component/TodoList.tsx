import React from "react"
import { Row } from "antd"
import TodoItem from "./TodoListItem"

const TodoList: React.FC = () => {
    return (
        <>
            <Row justify="space-around" style={{ padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <TodoItem
                        todoType="To Do"
                        item={[
                            "item 1",
                            "item 2",
                            "item 3",
                            "item 4",
                            "item 5",
                            "item 6"
                        ]}
                    />
                    <TodoItem
                        todoType="Done"
                        item={[
                            "item 1",
                            "item 2",
                            "item 3",
                            "item 4",
                            "item 5",
                            "item 6"
                        ]}
                        limit={3}
                        checked
                    />
                </div>
            </Row>
        </>
    )
}

export default TodoList
