import businessRules from "../modules/BLO"



const MoneyTree = (prop) => {

    let moneyTreeData;

    if(prop.round === 1)   
    { 
        moneyTreeData = businessRules.roundOneMoneyTree
    } 

    if(prop.round === 2)   
    { 
        moneyTreeData = businessRules.roundTwoMoneyTree
    } 

    if(prop.round === 3)   
    { 
        moneyTreeData = businessRules.suddenDeathRound
    } 

    return (
        <div id="moneyTreeContainer">
            {moneyTreeData.map((moneyTreeData) => (

                <button key={moneyTreeData} className="moneyTreeValueDisplay" type="button"> {moneyTreeData} </button>

            ))}

            <div className="suddenDeathTracker hide"> 1 </div>
            <div className="suddenDeathTracker hide"> 2  </div>
            <div className="suddenDeathTracker hide"> 3 </div>
            <div className="suddenDeathTracker hide"> 4  </div>
            <div className="suddenDeathTracker hide"> 5  </div>

            <div className="suddenDeathLifeLines hide">
                <img src="" alt="a life line"/>
            </div> 

        </div>
    )
}

export default MoneyTree;
