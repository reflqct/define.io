import React from "react";

type Props = {
    name: string,
    description: string,
}

const Identity = ({name, description}: Props) => (
    <div className="identity">
        <h1>{name}</h1>
        <hr />
        <h3>{description}</h3>
    </div>
)

export default Identity