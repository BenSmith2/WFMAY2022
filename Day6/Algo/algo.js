
var roll = Math.random();
var playerRoll = d6();

function d6() {

    roll = Math.floor(roll * 6) + 1;

    return roll;

    }
    





















// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];

// function oracle() {

//     var roll = Math.random();
//     roll = Math.floor(roll*20+1)
//     return roll;
// }

// console.log(lifesAnswers[(oracle())])
