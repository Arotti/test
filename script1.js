'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("введите даду в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос": null,
        "ответ на второй вопрос": null
    },
    optionalExpenses:{},
    income:[],
    savings: false
};
console.log(appData.budget);
console.log(appData.timeData);
appData.expenses["ответ на первый вопрос"] = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses["ответ на второй вопрос"] = prompt("Во сколько обойдется?", "");
console.log(appData.expenses["ответ на первый вопрос"]);
console.log(appData.expenses["ответ на второй вопрос"]);
//console.log(appData.budget/30);
alert(appData.budget/30);