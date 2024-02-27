const fibonacci = function(F) {
    let Array=[0,1,1];
    if (F==0){
        return 0;
    }else if(F==1 || F==2){
        return 1;
    }else if(F<0){
        return "OOPS"
    }else{
        let sum=0;
        for(let i=1;i<F-1;i++){
            sum=Array[1]+Array[2];
            Array[0]=Array[1];
            Array[1]=Array[2];
            Array[2]=sum;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
