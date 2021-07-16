const businessRules = 

{
    endPoint: `https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple`,
    randomQuestionNumber: Math.floor(Math.random() * 50), 
    roundOneMoneyTree: [`$0`,`$1,000`,`$5,000`,`$10,000`,`$50,000`,`$75,000`,`$12,5000`,`$25,0000`,`$500,000`],
    roundTwoMoneyTree: [`$0`,`$1,000`,`$10,000`,`$75,000`,`$125,000`,`$500,000`],
    suddenDeathRound: ["Classic5050.png","ClassicATA.png","ClassicPAF.png"],
    roundTimer: [45,20], 
    maxBankedPerRound:500000,
    allotedTimeToBank: 3000

}

export default businessRules;

