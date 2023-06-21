import React from "react"
import { Button, Typography } from "antd"

const Title: React.FC = () => {
    return (
        <Typography
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
        >
            <Typography.Title style={{ flex: 1, textAlign: "center" }}>
                Marvelous v2.0
            </Typography.Title>
            <Button type="link" color="blue" style={{ paddingRight: "10%" }}>
                Delete all tasks
            </Button>
        </Typography>
    )
}

export default Title
