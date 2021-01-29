let num = '266219';
let result = 1;

for (i = 0; i < num.length; i++) {
    result *= Number(num[i]);
}
result **= 3;
console.log(Number(String(result).substr(0, 2)));