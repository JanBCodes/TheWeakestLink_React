import React from 'react'

import { Link } from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'

import Button from '../components/Button'
import Header from '../components/Header'

const WelcomePage = () => {



    return (
        <>
        <Header/>
            <div id="WelcomePage">
                <section>
                    <Link to={`/selectPlayer`}>
                        <Button id="startGame" text="Start"/>
                    </Link>
                    
                    <Button id="loadGame" text="Load"/> 

                    <div id="rulesDiv">
                        <Button id="gameRulesButton" text="Rules"/> 
                    </div>

                </section>

                <div id="displayRules" className="show"> These are the rules of the game </div>

                <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 
            </div>
        </>
    )
}

export default WelcomePage;
