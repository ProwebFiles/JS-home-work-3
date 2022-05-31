do {
    var num = 100;
}while (isNaN(num) || num == 0)
do {
    var power = 100;
}while (isNaN(num) || num == 0)

let answer = 1;
for(let i = 0; i < power; i++) {
    answer = answer * num;
}
console.log(answer);