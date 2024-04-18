
const number = prompt("Введите число:");


const parsedNumber = parseInt(number);


const currentDay = new Date().getDay();


function isWeekday(day) {
  return day >= 1 && day <= 5;
}

switch (parsedNumber) {
  case 1:
    if (isWeekday(currentDay)) {
      alert("Сегодня будний день, а ваше число - 1");
    }
    break;
  case 2:
    if (isWeekday(currentDay)) {
      alert("Сегодня будний день, а ваше число - 2");
    }
    break;
  case 3:
    if (isWeekday(currentDay)) {
      alert("Сегодня будний день, а ваше число - 3");
    }
    break;
  case 4:
    if (isWeekday(currentDay)) {
      alert("Сегодня будний день, а ваше число - 4");
    }
    break;
  case 5:
    if (isWeekday(currentDay)) {
      alert("Сегодня будний день, а ваше число - 5");
    }
    break;
  default:
    alert("Число не соответствует будним дням.");
    break;
}
