'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const todayDay = new Date();

const days = function() {
    week.forEach((item, i) => {
        let div = document.createElement('div'),
            day = week[i];
        div.innerHTML = day;

        if (i === +todayDay.getDay()-1) { 
            console.log(todayDay.getDay());
            div.style.fontWeight = 'bold';
            div.textContent = week[i]; 
        }
        if (item == 'Суббота' || item == 'Воскресенье') { 
            div.style.fontStyle = 'italic';
            div.textContent = week[i];
        } else {
            div.textContent = week[i]; 
        }
        document.body.appendChild(div);
    });
}();
