import React from "react";
import "./index.css";

type HelloMessageProps = {
    name: string;
}

const HelloMessage: React.FunctionComponent<HelloMessageProps> = ({ name }) => {
    return (
        <span>
            Hello, { name }!
        </span>
    );
}

export default HelloMessage;