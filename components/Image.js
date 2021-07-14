import React from 'react'

const Image = (props) => {


    const imagePath = require(`../assets/img/players/${props.image}`)

    console.log(imagePath)

    return (
        <img id={props.id} src={props.src} alt={props.text} style={{backgroundImage: URL(imagePath)}}/>
    )
}

export default Image;
