const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
function calcSum(str) {

    let sum = 0;
    let numStore = "0";

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(String(str[i]) * 1))
            numStore += str[i];

        else {
            sum += parseInt(numStore);
            numStore = "0";
        }
    }
    return sum + parseInt(numStore);
}
console.log(calcSum(sumofString));
