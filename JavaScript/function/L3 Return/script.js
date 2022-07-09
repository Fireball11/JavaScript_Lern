function f1 (a, b) {
    return a + b;
}

function randInt (min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let r = randInt(222,333);
console.log(r);
console.log(randInt(222,333) + 100)

// вывод куда угодно 
console.log(f1(222,333));
document.querySelector('.out-1').textContent = f1(2,4);
document.querySelector('.out-1').style.background = `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`;

// Использовать в выражениях
console.log (100 + f1(3,4))

// Вывод данных введеных пользователем
document.querySelector('.b-3').addEventListener('click', function () {
    const s = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = 'hello' + s;
}
)