import React from "react"
import { Space, Input, Button, Row } from "antd"

const { Search } = Input
const Toolbox: React.FC = () => {
    const onSearch = (value: string) => console.log(value)

    return (
        <Row justify="space-around" style={{ padding: 20 }}>
            <Space direction="horizontal">
                <Input size="large" allowClear />
                <Button size="large" type="primary" style={{ width: 80 }}>
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
