'use strict';

let lang,
    arr,
    namePerson = 'Артем';

lang = 'ru';
lang = 'en';

if (lang === 'ru') console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
else if (lang === 'en') console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
else console.log('Язык должен быть формата "ru" или "en"');

switch (lang) {
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    default:
        console.log('Язык должен быть формата "ru" или "en"');
}

arr = [];
arr.en = ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'];
arr.ru = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'];
console.log(String(arr[lang]));

(namePerson === 'Артем') ? console.log('Директор') :
(namePerson === 'Максим') ? console.log('Преподаватель') :
console.log('Студент');
