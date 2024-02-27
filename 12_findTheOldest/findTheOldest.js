const findTheOldest = function(people) {//可以參考解答的方法
    let max=0;
    let copyi=0;
    // return people[2];
    for (let i=0;i<people.length;i++){
        if(people[i].yearOfDeath){
            if(people[i].yearOfDeath-people[i].yearOfBirth>max){
                copyi=i;
                max=people[i].yearOfDeath-people[i].yearOfBirth;
            }
        }else{
            var time=new Date().getFullYear();
            if(time-people[i].yearOfBirth>max){
                copyi=i;
                max=time-people[i].yearOfBirth;
                // return people[i].yearOfDeath;
            }
        }
    }
    return people[copyi];
};

// Do not edit below this line
module.exports = findTheOldest;
