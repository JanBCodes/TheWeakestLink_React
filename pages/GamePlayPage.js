import { useContext,useEffect,useState } from "react";

import Button from "../components/Button";
import MoneyTree from "../components/MoneyTree";

import { FaMusic } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa"

import ModalContext from "../context/ModalContext";

import businessRules from "../modules/BLO";
import { RESTAPI } from '../modules/DAO';

// import BgImg from "../assets/img/Weakest_Link_US_BG.Banner.png"


const GamePlayPage = () => {

    const playerSelected = sessionStorage.getItem('Name');
    
    let round = 1;
    const answers = [];
/************************************************
*********************************************** */

    const {modalStatus} = useContext(ModalContext);
    const [questionAndAnswerObj,setQuestionAndAnswerObj] = useState({

        question: null,
        correctAnswer: null,
        incorrectAnswers: answers//array

    });

/************************************************
*********************************************** */
    useEffect(() => {

        const newQuestion  = new RESTAPI();

        newQuestion.getAPIData(businessRules.endPoint)

        .then((data) => {


            questionAndAnswerObj.question = data.results[businessRules.randomQuestionNumber].question;
            questionAndAnswerObj.correctAnswer = data.results[businessRules.randomQuestionNumber].correct_answer;
            questionAndAnswerObj.incorrectAnswers = data.results[businessRules.randomQuestionNumber].incorrect_answers; //array

            /************************************************
            Pushing Answer to Array to be Shuffled for Random display
            *********************************************** */

            // answers.push(questionAndAnswerObj.correctAnswer)  
            // questionAndAnswerObj.incorrectAnswers.forEach((dataR) => {

            //     answers.push(dataR)
            // })

            // // answers.sort()
            const OGquestionAndAnswerObj = {...questionAndAnswerObj}

            setQuestionAndAnswerObj(OGquestionAndAnswerObj)

            console.log(questionAndAnswerObj)

            console.log(answers)
        })

    },[])
/************************************************
*********************************************** */

    const checkAnswer = (event) => {

        console.log(event)
        alert(`check answer fn`)

    }

    return (
        <div id="gameScreenContainer">
            <main> 
                
                <div className="avatarNameDisplayButtons"> 
                    <div id={playerSelected} className="playerSelected"> 
                    </div>
                </div>

                <section id="otherControls">

                    <Button id="musicOnOff" text={<FaMusic className="fas fa-music" />} />

                    <div id="bankedAmountBroughtFwd"> 
                        <div>
                            <FaPiggyBank className="fas fa-piggy-bank"/>
                        </div>
                        <div id="totalBankedforGame">
                            {`$00.00`}
                        </div>
                    </div>

                    <Button id="saveGame" text={<FaSave className="far fa-save"/>} />

                </section> 

                <MoneyTree round={round}/>

                <div id="gamePlayButtons">

                    <div id="displayedElements">
                        <div id="timerDisplay"> {`Timer`} </div>
                        <div id="roundDisplay"> Round {round} </div>
                        <div id="currentBankedAmount"> Current Banked Amt {} </div>
                    </div>

                    <div id={modalStatus.status === false ? "displayQnAContainer" : "hide"}> 
                        <div id="displayQuestion"> {questionAndAnswerObj.question} </div>
                    </div>

                    <div id={modalStatus.status === false ? "displayAnswerContainer" : "hide"}>

                        <div className="displayAnswers"> {questionAndAnswerObj.incorrectAnswers[0]} </div>
                        <div className="displayAnswers"> {questionAndAnswerObj.incorrectAnswers[1]} </div>
                        <div className="displayAnswers" onClick={checkAnswer}> {questionAndAnswerObj.correctAnswer}</div>
                        <div className="displayAnswers" onClick={checkAnswer}> {questionAndAnswerObj.incorrectAnswers[2]} </div>

                        {/* {answers.map((answer) => (
                            <div key={answer} className="displayAnswers"> {answer} </div>
                        ))} */}

                    </div>

                    <div id={modalStatus.status === true ? "modalBank" : "hide"} >
                            <div>{`3 sec Timer`}</div>
                            <Button id="bankedButton" text={<FaPiggyBank className="fas fa-piggy-bank"/>} />
                    </div>

                    <div id={round === 3 ? "finalQuestionsCounterContainer" : "hide"}>
                        <div id="finalQuestionsCounter1" className="finalCounter">
                            Counter 1
                        </div>
                        <div id="finalQuestionsCounter2" className="finalCounter">
                            Counter 2
                        </div>
                        <div id="finalQuestionsCounter3" className="finalCounter">
                            Counter 3
                        </div>
                        <div id="finalQuestionsCounter4" className="finalCounter">
                            Counter 4
                        </div>
                        <div id="finalQuestionsCounter5" className="finalCounter">
                            Counter 5
                        </div>
                        <div id="finalQuestionsCounter6" className="finalCounter">
                            Counter 6
                        </div>
                    </div>

                </div>

            </main>

        </div>
    )
}

export default GamePlayPage
