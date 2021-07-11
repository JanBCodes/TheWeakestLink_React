import React from 'react'

import { Link } from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'

import Button from '../components/Button'

const WelcomePage = () => {



    return (
        <div id="WelcomePage">
            <section>
                <Link to={`/selectPlayer`}>
                    <Button id="startGame" text="Start Game"/>
                </Link>
                
                <Button id="loadGame" text="Load Game"/> 
                <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 
            </section>

            <div id="rulesDiv">
                <Button id="gameRules" text="Game Rules"/> 
            </div>

            <div id="displayRules"></div>
        </div>
    )
}

export default WelcomePage;
