const removeFromArray = function(array,...args) {//多個輸入(?
    let newArray=[];
   array.forEach((item) => {
    if (!args.includes(item)){
        newArray.push(item);
    }
   });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
