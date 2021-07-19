import { useContext } from "react"
import TimerContext from "../context/TimerContext"

const Timer = ({timer}) => {

    const {timerStatus} = useContext(TimerContext);



    return (

        <div id="timerDisplay"> Timer: {timerStatus.time} </div>

    )
}

export default Timer;
