var iterativeLog = (array) => {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    })
}

var iterate = (callback) => {
    var array = [5,4,3,2,1]
    callback(array)

    return array
}

var doToArray = (array, callback) => {
    array.forEach(callback)
}
