const palindromes = function (str) {
    let arr = str.split("")
    let sortedArr = arr
    .filter((item) => /^[a-zA-Z0-9]*$/.test(item))
    .map((item) => item = item.toLowerCase())
    
    
    let arrReversed = [...sortedArr]
    arrReversed.reverse()
    
    console.log("arrays", sortedArr, "-----", arrReversed)

    
    ogStr = sortedArr.join()
    revStr = arrReversed.join()

    console.log("strings", ogStr, "----", revStr)

    if (ogStr === revStr) {
        return true
    } else {
        return false
    }
}

// Do not edit below this line
module.exports = palindromes;
