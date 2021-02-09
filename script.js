'use strict';

const a = document.querySelector('.a'),
    b = document.querySelector('.b'),
    getDateForA = () => {
        let date = new Date(),
            options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            str = date.toLocaleString("ru", options),
            data = str.split(', '),
            dateNow = data[1].replace('г.', 'года'),
            hour = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            hourName,
            minutesName,
            secondsName,
            im = [1],
            mn = [0, 5, 6, 7, 8, 9],
            rod = [2, 3, 4];
        
        if (hour === 1 || hour === 21){
            hourName = 'час'
        } else if ( hour >= 2 && hour < 5){
            hourName = 'часа'
        } else if ( hour >= 5 && hour < 21){
            hourName = 'часов'
        } else if(hour > 22 && hour <= 24){
            hourName = 'часа'
        }

        if (im.includes(minutes%10)){
            minutesName = 'минута';
        } else if (mn.includes(minutes%10)){
            minutesName = 'минут';
        } else if (rod.includes(minutes%10)){
            minutesName = 'минуты';
        }

        if (im.includes(seconds%10)){
            secondsName = 'секунда';
        } else if (mn.includes(seconds%10)){
            secondsName = 'секунд';
        } else if (rod.includes(seconds%10)){
            secondsName = 'секунды';
        }


        return `Сегодня ${data[0]}, ${dateNow}, ${hour} ${hourName} ${minutes} ${minutesName} ${seconds} ${secondsName}`;
    },
    getDateForB = () => {
        let date = new Date(),
            options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },
            str = date.toLocaleString("ru", options);
        
        return str.split(', ').join(' - ');
    },
    setDateA = () => {
        a.innerHTML = getDateForA();
    },
    setDateB = () => {
        b.innerHTML = getDateForB();
    };

let timeIntervalForA = setInterval(setDateA, 1000),
    timeIntervalForB = setInterval(setDateB, 1000);