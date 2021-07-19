import { useContext,useEffect,useState } from "react";

import Button from "../components/Button";
import MoneyTree from "../components/MoneyTree";
import Timer from "../components/Timer"

import { FaMusic } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa"

import ModalContext from "../context/ModalContext";

import businessRules from "../modules/BLO";
import { RESTAPI } from '../modules/DAO';

const he = require('he');

// import BgImg from "../assets/img/Weakest_Link_US_BG.Banner.png"


const GamePlayPage = () => {

    const playerSelected = sessionStorage.getItem('Name');
    
    let round = 1;
    // const answers = [];
/************************************************
*********************************************** */

    const {modalStatus, setModalStatus} = useContext(ModalContext);
    const [questionAndAnswerObj,setQuestionAndAnswerObj] = useState({

        question: null,
        correctAnswer: null,
        answers: []

    });

/************************************************
*********************************************** */
    useEffect(() => {

        const newQuestion  = new RESTAPI();

        newQuestion.getAPIData(businessRules.endPoint)

        .then((data) => {

            questionAndAnswerObj.question = he.decode(data.results[businessRules.randomQuestionNumber].question)

            // questionAndAnswerObj.question = data.results[businessRules.randomQuestionNumber].question;
            questionAndAnswerObj.correctAnswer = he.decode(data.results[businessRules.randomQuestionNumber].correct_answer + '  *')
            questionAndAnswerObj.incorrectAnswers = data.results[businessRules.randomQuestionNumber].incorrect_answers; //array

            /************************************************
            Pushing Answer to Array to be Shuffled for Random display
            *********************************************** */

            console.log(`Correct Answer: ${questionAndAnswerObj.correctAnswer}`)  

            questionAndAnswerObj.answers.push(questionAndAnswerObj.correctAnswer)  
            questionAndAnswerObj.incorrectAnswers.forEach((dataR) => {

                questionAndAnswerObj.answers.push(he.decode(dataR))
            })

            questionAndAnswerObj.answers.sort()

            const OGquestionAndAnswerObj = {...questionAndAnswerObj}

            setQuestionAndAnswerObj(OGquestionAndAnswerObj)

        })

    },[])
/************************************************
*********************************************** */

    const checkAnswer = (event) => {

        const clicked = event.target.id
       
        
        if(clicked === questionAndAnswerObj.correctAnswer)
        {
            // alert(`Correct Answer Selected`)
            setModalStatus({status: true})



            //call Bank Modal
            //Move Up MOney Tree
            //Call New Question
        }
        else
        {
            alert(`Wrong Answer Selected`)
            //Restart Position on Money Tree

        }


    }

    const bankMoney = () => {

        
        //Add to Bank
        // Move Up Money Tree
        //Call New Question

        setModalStatus({status: false})


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
                        <Timer timer={round === 1 ? businessRules.roundTimer[0] : businessRules.roundTimer[1]}/>
                        <div id="roundDisplay"> Round {round} </div>
                        <div id="currentBankedAmount"> Current Banked Amt {} </div>
                    </div>

                    <div id={modalStatus.status === false ? "displayQnAContainer" : "hide"}> 
                        <div id="displayQuestion"> {questionAndAnswerObj.question} </div>
                    </div>

                    <div id={modalStatus.status === false ? "displayAnswerContainer" : "hide"}>

                        {questionAndAnswerObj.answers.map((answer) => (
                            <div key={answer} id={answer} className="displayAnswers" onClick={checkAnswer}> {answer} </div>
                        ))}
                    </div>

                    <div id={modalStatus.status === true ? "modalBank" : "hide"} >
                            <div>{`3 sec Timer`}</div>
                            <button id="bankedButton" onClick={bankMoney}> <FaPiggyBank className="fas fa-piggy-bank"/> </button>
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
