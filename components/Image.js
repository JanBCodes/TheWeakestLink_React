import React from 'react'



const Image = (props) => {
    return (
        <img id={props.id} src={props.src} alt={props.text}/>
    )
}

export default Image
