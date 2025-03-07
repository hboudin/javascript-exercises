const findTheOldest = function(arr) {
    let todaysDate = new Date().getFullYear()
    arr.map((item) => 
        item.age = (item.yearOfDeath || todaysDate) - item.yearOfBirth)

    arr.sort((a, b) => b.age - a.age)
    return arr[0]
};          

// Do not edit below this line
module.exports = findTheOldest;