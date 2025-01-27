import React, { useEffect, useState } from "react"

// const Button = (props) => {
//     return (
//         <button>{props.text}</button>
//     )
// }

// Button.defaultProps = {
//     text: "Kick ME!"
// }

const Button = ({ text = "Kick ME!" }) => {
    const [click, setClick] = useState(0) // хук для изменения состояния объекта

    useEffect(() => {   // хук срабатывает всегда, когда меняются какие-либо состояния в объекте
        document.title = `Вы долбаёб № ${click}`
    })

    return (
        <button onClick={() => setClick(click + 1)}>{text} {click}</button>
    );
};

export default Button