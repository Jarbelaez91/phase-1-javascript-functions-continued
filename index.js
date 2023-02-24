// code your solution here
function saturdayFun (want = "roller-skate") {
    return (`This Saturday, I want to ${want}!`);
}
console.log(saturdayFun("bathe my dog"))
console.log(saturdayFun)

function mondayWork(monday = "go to the office") {
    return (`This Monday, I will ${monday}.`);
}
console.log(mondayWork("work from home"))
console.log(mondayWork)

function wrapAdjective(flair ='*', adj){
    let wrappedSentence = function (adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
    return wrappedSentence;
    }
console.log(`*`, "a hard worker")
console.log(`||`,"a dedicated programmer")
console.log()