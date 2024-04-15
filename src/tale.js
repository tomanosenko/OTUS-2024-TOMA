//Задание 1

const kolobok = (character) => {
    switch(character){
        case "дедушка":
            return "Я от дедушки ушёл";
        case "заяц":
            return "Я от зайца убежал";
        case "лиса":
            return "Меня съели";
    }
}

console.log(kolobok("дедушка"));
console.log(kolobok("заяц"));
console.log(kolobok("лиса"));


//Задание 2

function newYear(name) {
    return `${name}! ${name}! ${name}!`;
}

console.log(newYear("Дед Мороз"));
console.log(newYear("Снегурочка"));
