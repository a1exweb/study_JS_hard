'use strict';

let arr = ['111', '222', '332', '444', '554', '666', '777'];
console.log(arr.filter((num) => [ '2', '4' ].includes(num[0])));

label:
for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue label;
    }
    console.log(`${i} - делители этого числа: 1 и ${i}`);
}