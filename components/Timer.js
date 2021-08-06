import { useContext, useEffect } from "react"
import TimerContext from "../context/TimerContext"

const Timer = ({timer}) => {

    const {timerStatus, setTimerStatus} = useContext(TimerContext);

    useEffect(() => {

        let counter = timer

        timerStatus.time = counter

            const ref = setInterval(() => {

                const OGCounter = {...timerStatus}

                counter --

                timerStatus.time = counter
                
                setTimerStatus(OGCounter)

                if(timerStatus.time < 0)
                {
                    clearInterval(ref)
                }

            },1000)

    }, [])


    return (

        <div id="timerDisplay"> Timer: {timerStatus.time} </div>

    )
    
}

export default Timer;
