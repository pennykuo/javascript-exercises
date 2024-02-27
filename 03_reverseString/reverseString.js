const reverseString = function(word) {
    // let str=word.split("").reverse().join("");//放顛倒字串的網路方法
    // return str;
    let string="";//土法煉鋼
    for(let char of word){
        string =char+string ;
    }
    return string ;
};

// Do not edit below this line
module.exports = reverseString;
