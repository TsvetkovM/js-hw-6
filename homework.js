// 1====================
console.log('Початок 1 завдання');
let min = 1;
let max = 10;
for (let i = min; i <= max; i += 1 ){
    console.log(i)
}
console.log('Кінець 1 завдання');
// 2=================================
console.log('Початок 2 завдання');
for (let index = 2; index <= 20; index++) {
    if (index % 2 !== 0) {  
        continue;
    }
    console.log(index);
}
console.log('Кінець 2 завдання');
// 3====================================
console.log('Початок 3 завдання ');
for (let index = 1; index <= 10; index++) {
    console.log(7 * index );
}
console.log('Кінець 3 завдання');
// 4======================================
console.log('Початок 4 завдання');
const n = 20; 

for (let index = 0; index < n; index++) {
    if (index >= n) {
        break;
    }
    console.log(index);
}
console.log('Кінець 4 завдання');
// 5======================================
console.log('Початок 5 завдання');
for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0) {
        continue;
    }
    console.log(index);
}
console.log('Кінець 5 завдання');