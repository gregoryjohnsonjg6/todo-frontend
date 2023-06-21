import { Checkbox, Divider, Space } from "antd"
import React from "react"

interface TodoItemProps {
    todoType: string
    item?: string[]
    limit?: number
    checked?: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({
    todoType,
    item,
    limit,
    checked
}) => {
    return (
        <Space direction="vertical" style={{ width: 350, padding: 20 }}>
            <Divider>{todoType}</Divider>
            <Space direction="vertical">
                {item?.slice(0, limit || item.length).map((el) => {
                    return <Checkbox checked={checked}>{el}</Checkbox>
                })}
            </Space>
        </Space>
    )
}

export default TodoItem
