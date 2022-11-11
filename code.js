
let num1 = 12;
if(num1 > 13) {
    document.write("Great than 13");
}else{
    document.write("less than 13");
}

//Using a function
//function is Number(onlyNumber) {
// if(Number.isFinite(onlyNumber)) {
//        document.write(${onlyNumber} is a




//Using a function
function idNumber(onlyNumber) {
    if(Number.isFinite(onlyNumber)) {
        document.write('${onlyNumber} is a number');//
    else} {
        document .write('${onlyNumber} is not a number');
    }
}

//Calling a function
let myNumber = 762e;
isNumber(myNumber);