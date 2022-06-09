// function имя(параметры) {
//     ...тело...
//   }

// Объявление фукнции
function showMessage() {
    alert('Всем привет!');
}
// Вызов функции
showMessage();


// 
// Локальные переменные вызываются внутри функции
// и не работают запределами. Также функции имеют полный доступ к
// внешним переменным. 
// Внешние выбираются только если нет локальных.
//
function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
    alert(message);
}
showMessage(); // Привет, я JavaScript!
alert(message); // <-- будет ошибка, т.к. переменная видна только внутри функции
// При этом функцияя имеет полный доступ к внешним переменным

let userName = 'Вася'; // Глобальная переменная
function showMessage() {
    let userName = "Петя"; // объявляем локальную переменную
    let message = 'Привет, ' + userName; // Петя
    alert(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную
























































































































































