import Button from "../components/Button";
import MoneyTree from "../components/MoneyTree";

import { FaMusic } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa"

// import BgImg from "../assets/img/Weakest_Link_US_BG.Banner.png"

const GamePlayPage = () => {

    let round = 1;





    return (
        <div id="gameScreenContainer">
            <main> 
                <div id="playerSelected"> Player Selected </div>

                <section id="otherControls">

                    <Button id="musicOnOff" text={<FaMusic className="fas fa-music" />} />

                    <div id="bankedAmountBroughtFwd"> 
                        <div>
                            <FaPiggyBank className="fas fa-piggy-bank"/>
                        </div>
                        <div id="totalBankedforGame">
                            $00.00
                        </div>
                    </div>

                    <Button id="saveGame" text={<FaSave className="far fa-save"/>} />

                </section> 

                <MoneyTree round={round}/>

                <div id="gamePlayButtons">

                    <div id="displayedElements">
                        <div id="timerDisplay"> Timer Display </div>
                        <div id="roundDisplay"> Round {round} </div>
                        <div id="currentBankedAmount"> Current Banked Amt</div>
                    </div>

                    <div id="displayQnAContainer"> 
                        <div id="displayQuestion"> Question </div>
                    </div>

                    <div id="displayAnswerContainer">
                        <div className="displayAnswers"> Answer </div>
                        <div className="displayAnswers"> Answer </div>
                        <div className="displayAnswers"> Answer </div>
                        <div className="displayAnswers"> Answer </div>
                    </div>

                    <div id="actionButtons" className="hide">
                            <Button id="bankedButton" text={<FaPiggyBank className="fas fa-piggy-bank"/>} />
                    </div>

                </div>

            </main>

        </div>
    )
}

export default GamePlayPage
