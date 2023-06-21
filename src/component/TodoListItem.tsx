import { Checkbox, Divider, Space } from "antd"
import React from "react"

interface TodoItemProps {
    todoType: string
    item: any[]
    limit?: number
    checked?: boolean
    handleClick: (e1: String, e2: number) => any
    search: string
}

const TodoItem: React.FC<TodoItemProps> = ({
    todoType,
    item,
    limit,
    checked,
    handleClick,
    search
}) => {
    return (
        <Space direction="vertical" style={{ width: 350, padding: 20, textAlign: 'left' }}>
            <Divider style={{ fontSize: '20px' }}>{todoType}</Divider>
            <Space direction="vertical" style={{ paddingLeft: '10%' }}>
                {item?.slice(0, limit || item.length).map((el, key) => {
                    return (
                        el.name.includes(search) ? (
                            <Checkbox
                                checked={checked}
                                key={key}
                                onClick={() => handleClick(el._id, key)}
                                style={{ fontSize: '20px' }}
                            >
                                {el.name}
                            </Checkbox>
                        ) : (
                            <></>
                        )
                    )
                })}
            </Space>
        </Space>
    )
}

export default TodoItem
