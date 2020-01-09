import React from 'react'
import "@fortawesome/react-fontawesome"

export default function Icon(props) {
    return <i className={"fab fa-" + props.icon}></i>
}