import React from "react"
import { Button, Typography } from "antd"

interface TitleProps {
    clearAll: () => any
}
const Title: React.FC<TitleProps> = ({ clearAll }) => {
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
            <Button
                type="link"
                color="blue"
                style={{ paddingRight: "10%" }}
                onClick={clearAll}
            >
                Delete all tasks
            </Button>
        </Typography>
    )
}

export default Title
