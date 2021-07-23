'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', () => {
    const num = Math.random();


    if (num < 0.2) { result.textContent = 'ツイてる！！！'; } else if (num < 0.5) {
        result.textContent = 'ビミョ～';
    } else if (num < 0.8) {
        result.textContent = 'キケン！！！';

    } else {
        result.textContent = 'ダメダメ～';
    }

});