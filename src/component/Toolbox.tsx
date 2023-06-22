import React, { useState } from "react"
import { Space, Input, Button, Row } from "antd"
import axios from 'axios';

const { Search } = Input
interface ChildProps {
    setTodo: React.Dispatch<React.SetStateAction<string[]>>,
    api: String
}
const Toolbox: React.FC<ChildProps> = ({ setTodo, api }) => {
    const onSearch = (value: string) => console.log(value)
    const [value, setValue] = useState("")

    const creatOne = async (value: String) => {
        console.log(value);
        await axios.post(`${api}/create`, {
            name: value
        }).then(response => {
            setTodo(response.data.data.data);
        })
    }

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
                        creatOne(value);
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
