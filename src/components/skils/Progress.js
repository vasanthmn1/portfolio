import React from 'react'
import './skile.css'
export const Progress = ({ done }) => {

    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);
    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>
    )
}
