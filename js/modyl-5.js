//  несколько задачек для закрепления метода forEach:
// ==================================================

//    1) Сумма квадратов чисел:
//     Напишите функцию calculateSquareSum(numbers),
//     которая принимает массив чисел и возвращает
//      сумму квадратов каждого числа в массиве.

// =====================================================

// 2) Фильтр строки:
// Напишите функцию filterString(array, query),
// которая принимает массив строк array и
// строку query.Функция должна вернуть новый массив,
// включающий только те строки из исходного массива,
//     которые содержат строку query.

// =====================================================

//    3) Преобразование чисел:
//     Напишите функцию doubleNumbers(numbers),
//     которая принимает массив чисел и удваивает
//      каждое число в массиве.

// =====================================================

// 4) Поиск гласных букв:
// Напишите функцию findVowels(str),
// которая принимает строку и возвращает
//  массив из гласных букв в этой строке.

// ======================================================

// =========================
// Пример №1
// Підрахунок кількості від'ємних чисел:
// Приймає масив чисел і повертає кількість від'ємних чисел.

// javascript

// function countNegativeNumbers(numbers) {
//   let count = 0;
//   numbers.forEach(function (number) {
//     if (number < 0) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(countNegativeNumbers([5, -2, 10, -8, 4]));
// Виведе 2

// ============================

// Пример №2 Зміна кожного елемента на його квадрат:
// Приймає масив чисел і повертає новий масив,
//     де кожен елемент - це квадрат відповідного
//     числа в оригінальному масиві.

// javascript

// function squareNumbers(numbers) {
//   const squaredArray = [];
//   numbers.forEach(function (number) {
//     squaredArray.push(number * number);
//   });
//   return squaredArray;
// }

// console.log(squareNumbers([1, 2, 3, 4]));
// Виведе [1, 4, 9, 16]

// ===========================

// Пример №3 Видалення парних чисел:
// Приймає масив чисел і повертає новий масив,
//     де відсутні парні числа.

// javascript

// function filterOddNumbers(numbers) {
//   const oddNumbers = [];
//   numbers.forEach(function (number) {
//     if (number % 2 !== 0) {
//       oddNumbers.push(number);
//     }
//   });
//   return oddNumbers;
// }

// console.log(filterOddNumbers([1, 2, 3, 4, 5]));
// Виведе [1, 3, 5]

// ====================================================

// Фильтрация чисел:
// У вас есть массив чисел.Напишите функцию filterNumbers,
// которая принимает массив чисел и возвращает новый массив,
//     содержащий только положительные числа.
// const numbers = [1, 23, -8, -96, 105];
// const filterNumbers = numbers.filter((number) => number >= 0);

// console.log(filterNumbers);

// ======================================================

// Поиск уникальных элементов:
// У вас есть массив строк.Напишите функцию findUnique,
// которая принимает массив строк и возвращает массив
// уникальных строк(без повторений).

// ==================================================

// Сумма четных чисел:
// Напишите функцию sumOfEven, которая принимает массив чисел
//  и возвращает сумму всех четных чисел в массиве.

// ======================================================

// Трансформация данных:
// У вас есть массив объектов пользователей с полями name,
// age и isActive.Напишите функцию extractNames,
// которая принимает такой массив и возвращает
//      массив только с именами пользователей.

// ========================================================

// Проверка наличия:
// Напишите функцию contains, которая принимает массив и значение,
// и возвращает true, если значение присутствует в массиве,
//     и false в противном случае.

// =========================================================

// Сортировка по длине строки:
// У вас есть массив строк.Напишите функцию sortByLength,
// которая принимает массив строк и возвращает новый массив,
//     отсортированный по длине строк, начиная с самой короткой.

// ==============================================================

// Конкатенация массивов:
// Напишите функцию concatArrays,
// которая принимает два массива и возвращает новый массив,
//     содержащий все элементы из первого и второго массивов.

// ===========================================================
