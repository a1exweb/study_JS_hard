'use strict';

const text = function (x) {
    if (typeof(x) !== 'string') {
        return 'Аргумент не является строкой, передайте пожалуйста значение в виде строки.';
    } else {
        x = x.trim();
        if (x.length > 30) x = x.slice(0, 30) + '...';
        return x;
    }
}

alert(text('           Аргумент является строкой, отработало условие проверки.   '));
alert(text(111));