const palindromes = function (string) {
    let markArray=[' ','!',',','.'];
    string=string.toLowerCase();
    let Array=string.split('');
    let newArray=[];

    Array.forEach((item) => {//把沒有標點符號的字元放入新陣列
        if (!markArray.includes(item)){
            newArray.push(item);
        }
    });
    
    let endLen=newArray.length-1;
    // return newArray ;
    for (let i=0;i<newArray.length/2 ;i++){
        
      if(newArray[i]!=newArray[endLen-i]){
        return false;
      }
    }
      return true;
     
};

// Do not edit below this line
module.exports = palindromes;
