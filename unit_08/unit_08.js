// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. 

function t1(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    document.querySelector('.out-1').textContent = sum
    return sum;
}

document.querySelector('.b-1').addEventListener('click', function () {
    console.log(t1(1, 55))
})


// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2. 

function t2(min, max) {
    console.log(min)
    console.log(max)
    if (min > max) {
        document.querySelector('.out-2').textContent = min
    } else {
        document.querySelector('.out-2').textContent = max
    }
    
}

document.querySelector('.b-2').addEventListener('click', () => {
    console.log(t2(3, 99))
})

// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3. 
function t3(parameter1, parameter2, parameter3) {
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
    if (parameter2 === 0) {
        document.querySelector('.out-3').textContent = parameter1
    } else {
        document.querySelector('.out-3').textContent = parameter1 * parameter2
    }
}

document.querySelector('.b-3').addEventListener('click', () => {
    console.log(t3(3, 99, 42))
})
// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4. 
function t4(block, arr) {
    console.log(arr)
    block.innerHTML = arr.join(' ')

}

document.querySelector('.b-4').addEventListener('click', () => {
    console.log(t4(document.querySelector('.out-4'), [1, 2, 3, 4, 5]))
})
// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5. 
function t5(element){
    return document.querySelector(element) !== null
}

document.querySelector('.b-5').addEventListener('click', () => {
    const result = t5('.out-5')
    console.log(result)
    document.querySelector('.out-5').innerHTML = result
})
// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.
let result6 = []
function t6(array){
    console.log(array)
    for (let i = array.length; i >= 0; i--) {
        //const element = array[i];
        console.log(array[i])
        result6.push(array[i])
    }
    return result6
}

document.querySelector('.b-6').addEventListener('click', () => {
    t6([6, 4, 1, 6, 9, 10])
    console.log(result6)
    document.querySelector('.out-6').innerHTML = result6.join(" ")
})
// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

const out7 = document.querySelector('.out-7');

function t7(block, text) {
    console.log(block)
    let result = text.trim().toLowerCase()
    
    block.innerHTML = result

    return result
}

document.querySelector('.b-7').addEventListener('click', function () {
    const outpute = t7(out7, ' HelLO wORLd       ');
    console.log(outpute)
})


// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.
const t8 = (arr, year) => {
    return arr.every((item) => item >= year);
};


document.querySelector('.b-8').addEventListener('click', () => {
    const a8 = [2000, 2005, 2010, 2015, 2020];
    const year = 2000;
    const result = t8(a8, year);
    document.querySelector('.out-8').textContent = result;
  });
// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел. 
let two2 = ''
let array9 = []
function t9(one, two) {
    two2 = two
    array9 = one
    console.log(one)
    console.log(two)
    array9.push(two2)
    return array9
}

document.querySelector('.b-9').addEventListener('click', function () {
    let result9 = t9([6, 4, 2, 6, 9], 12)
    document.querySelector('.out-9').innerHTML = result9
})
// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел. 

function t10(array10, ...parameter10) {
    return [...array10, ...parameter10]
}


document.querySelector('.b-10').addEventListener('click', function() {
    const result = t10([2, 65, 23, 99], 6, 23, 12, 98)
    document.querySelector('.out-10').textContent = result.join(' ');
})
