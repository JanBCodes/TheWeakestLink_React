import React from 'react'

import { FaGithub } from 'react-icons/fa'

const Footer = () => {

    
    return (
        <footer>
            Developed by: JanBCodes 
            <a href="https://github.com/JanBCodes" type="_blank">
                <FaGithub className="fab fa-github"/>
            </a>
        </footer>
    )
}

export default Footer
