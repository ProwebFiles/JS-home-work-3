do {
    var num = +prompt('Введите максимальное количество ступенек');
}while (isNaN(num) || num <= 0) 

do {
    var sym = prompt('Введите символы отступов');
}while (sym == '')
do {
var fsym = prompt('Введите конечный символ');
}while (fsym == '')

for (let i = 0; i < num; i++) {
    fsym = i == 0 ? fsym : sym + fsym;
    console.log(fsym);
}