const businessRules = 

{
    endPoint: `https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple`,
    randomQuestionNumber: Math.floor(Math.random() * 50), 
    roundOneMoneyTree: [`$500,000`,`$250,000`,`$125,000`,`$75,000`,`$50,000`,`$10,000`,`$5,000`,`$1,000`,`$0`],
    roundTwoMoneyTree: [`$500,000`,`$125,000`,`$75,000`,`$10,000`,`$1,000`, `$0`],
    suddenDeathRound: ["Classic5050.png","ClassicATA.png","ClassicPAF.png"],
    roundTimer: [45,20], 
    maxBankedPerRound:500000,
    allotedTimeToBank: 3000

}

export default businessRules;

