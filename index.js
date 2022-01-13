const findMatching=(driverArray, enteredName)=>{
    return (driverArray.filter(driverName=>driverName.toLowerCase()===enteredName.toLowerCase()))
}

const fuzzyMatch=(driverArray, enteredLetters)=>{
    let endNum = enteredLetters.length

    return (driverArray.filter(driverName=> {
        return driverName.slice(0, endNum).toLowerCase() === enteredLetters.toLowerCase()
    }))
}

const matchName = function (driverArray, string) {
    let match = driverArray.filter((name) => name.name === string);
    if (match) return match;
}
    
