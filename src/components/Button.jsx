import React from 'react'
import {useState} from 'react'

const Button = ({count, onClick}) => {
    // const [count, setCount] = useState(0)
    // const handleClick = () => {
    //     setCount(count + 1)
    // }
    return (
    <button onClick={onClick}>Total # of Clicks {count}</button>
    )
}

export default Button