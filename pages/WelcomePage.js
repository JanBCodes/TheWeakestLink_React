import {useContext} from 'react'

import {Link} from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'

import Button from '../components/Button'
import Header from '../components/Header'

import RulesContext from '../context/RulesContext'

const WelcomePage = () => {

    const { rulesStatus, setRulesStatus} = useContext(RulesContext);

    const rulesDisplay = () => {

        if(rulesStatus.status === false) 
        {
            setRulesStatus({status: true});
        }
        else
        {
            setRulesStatus({status: false});
        }

    }

    return (
        <>
        <Header/>
            <div id="WelcomePage">
                <section>
                    <Link to={`/selectPlayer`}>
                        <Button id="startGame" text="Start"/>
                    </Link>
                    
                    <Button id="loadGame" text="Load"/> 

                    <div id="rulesDiv" onClick={rulesDisplay}>
                        <Button id="gameRulesButton" text="Rules"/> 
                    </div>

                </section>

                <div id="showRulesDiv">
                    <div id="displayRules" className={rulesStatus.status === false ? "hide" : "show"}> 
                        These are the rules of the game <br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Necessitatibus ex officiis consequuntur iusto cum fugiat!
                    </div>
                </div>

                <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 
            </div>
        </>
    )
}

export default WelcomePage;
