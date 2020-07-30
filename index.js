// Add your functions here
function map(arr, func) {
    const newArr = []
    for ( let i=0; i<arr.length; i++){
        newArr.push(func(arr[i]))
    }
    return newArr
}

function reduce(arr, func, start) {
    if (!!start) {
        for ( let i=0; i<arr.length; i++){
            start = func(arr[i], start)
        }
        return start
    } else {
        start = arr[0]
        for ( let i=1; i<arr.length; i++){
            start = func(arr[i], start)
        }
        return start
    }
}