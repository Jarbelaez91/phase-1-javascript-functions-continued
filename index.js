function saturdayFun (saturday = 'roller-skate') {
    return `This Saturday, I want to ${saturday}!`
}


function mondayWork(monday = 'go to the office') {
    return `This Monday, I will ${monday}.`
}

function wrapAdjective (string = '*') {
    return function (parameter = "a hard worker") {
    return `You are ${string}${parameter}${string}!`
}
}