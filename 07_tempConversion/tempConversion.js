const convertToCelsius = function(Fahrenheit) {//轉攝氏
  let fah=0;
  if(Fahrenheit==32){
    return 0;
  }else{
    fah=(Fahrenheit-32)*5/9;
    fah=Math.round(fah*10);
    return fah/10;
  }
};

const convertToFahrenheit = function(Celsius) {//轉華氏
  let  cel=0;
  if(Celsius==0){
    return 32;
  }else {
    cel=Celsius*9/5+32;
    cel=Math.round(cel*10);
    return cel/10;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
