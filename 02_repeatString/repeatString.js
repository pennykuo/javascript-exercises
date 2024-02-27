const repeatString = function(word,times) {
    if(times<0) return "ERROR";//此if判斷是參考解答的
        let string =""; 
    
    
    for(let i=1;i<=times;i++){
        string +=word;
    }
    return string ;
};

// Do not edit below this line
module.exports = repeatString;
