import { Checkbox, Divider, Space } from "antd"
import React from "react"

interface TodoItemProps {
    todoType: string
    item: any[]
    limit?: number
    checked?: boolean
    handleClick: (e1: String, e2: number) => any
}

const TodoItem: React.FC<TodoItemProps> = ({
    todoType,
    item,
    limit,
    checked,
    handleClick
}) => {
    return (
        <Space direction="vertical" style={{ width: 350, padding: 20 }}>
            <Divider>{todoType}</Divider>
            <Space direction="vertical">
                {item?.slice(0, limit || item.length).map((el, key) => {
                    return (
                        <Checkbox
                            checked={checked}
                            key={key}
                            onClick={() => handleClick(el._id, key)}
                        >
                            {el.name}
                        </Checkbox>
                    )
                })}
            </Space>
        </Space>
    )
}

export default TodoItem
