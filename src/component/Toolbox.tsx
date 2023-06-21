import React, { useState } from "react"
import { Space, Input, Button, Row } from "antd"

const { Search } = Input
interface ChildProps {
    setTodo: React.Dispatch<React.SetStateAction<string[]>>
}
const Toolbox: React.FC<ChildProps> = ({ setTodo }) => {
    const onSearch = (value: string) => console.log(value)
    const [value, setValue] = useState("")

    return (
        <Row justify="space-around" style={{ padding: 20 }}>
            <Space direction="horizontal">
                <Input
                    size="large"
                    allowClear
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button
                    size="large"
                    type="primary"
                    style={{ width: 80 }}
                    onClick={() => {
                        setTodo((e) => [...e, value].sort())
                        setValue("")
                    }}
                >
                    Add
                </Button>
            </Space>
            <Search
                size="large"
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                style={{ width: 304 }}
            />
        </Row>
    )
}

export default Toolbox
