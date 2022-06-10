const dataTypes = {
  strings: 'hola',
  bolean: true | false,
  number: 1,
  object: {},
  array: [],
};

// Examples

const Users = [
  { name: 'Cesar Fonseca', age: 21 },
  { name: 'Brandon', age: 20 },
  { name: 'Brandon', age: 20 },
  { name: 'Brandon', age: 20 },
];

const Numbers = [1, 2, 3, 4, 5, 6];

// console.log(Numbers);

/* Functions */

// function Calculator() {}

// ECMAscript 6+
// const Calculator = () => {};

// Commands

/*
1
2
3
4
5
*/

// 1
// 2
// 3
// 4
// 5

// myNameIs = 'Cesar'
// myNameIs == 'Cesar'
// myNameIs === 'Cesar'

// Exercise

// = igual a
// == igual que
// === igual que exacto

function Calculator(number1, number2, operator) {
  // if (operator == 'add') {
  //   return number1 + number2;
  // }
  // if (operator == 'multiply') {
  //   return number1 * number2;
  // }
  // if (operator == 'division') {
  //   return number1 / number2;
  // }
  // if (operator == 'add') return number1 + number2;
  // if (operator == 'multiply') return number1 * number2;
  // if (operator == 'division') return number1 / number2;
  // return 'Operator not found';

  switch (operator) {
    case 'add':
      return number1 + number2;

    case 'multiply':
      return number1 * number2;

    case 'division':
      return number1 / number2;

    case 'empowerment':
      return number1 ** number2;

    case 'test':
      break;

    default:
      return 'Operator not found';
  }
}

const add = 'sumar';

// console.log(Calculator(3, 2, 'add'));

// console.log(Calculator(2, 5, 'multiply'));

// console.log(Calculator(3, 5, 'division'));

// console.log(Calculator(3, 5, 'empowerment'));

// console.log(Calculator(3, 5, 'test'));

// console.log(Calculator(3, 5, 'caualquiercosa'));

//

function CalculatorWObject({ number1, number2, operator }) {
  return Calculator(number1, number2, operator);
}

// console.log(CalculatorWObject({ number1: 5, number2: 5, operator: 'multiply' }));

// Bucles

const conjuntoNumeros = [1, 2, 3, 4, 5, 6, 7];
let conjuntoAnimales = ['🐪', '🦈'];

// console.log(conjuntoNumeros.length);

// console.log(conjuntoNumeros[0]);

conjuntoAnimales = ['🐄', '🐕', '🐈', '🐤'];

// for (let Idx = 0; Idx < conjuntoAnimales.length; Idx++) {
//   const element = conjuntoAnimales[Idx];

//   console.log(Idx + 1, 'Animal', element);
// }

// console.log(
//   conjuntoAnimales.map(function (Itm, Idx, Arr) {
//     return `${Idx}`;
//   })
// );

// console.log(conjuntoAnimales.map((Itm, Idx, Arr) => `${Idx}`));

// console.log(
//   conjuntoAnimales.map(function (PerroGato, Idx) {
//     if (PerroGato == '🐄') {
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

// map use []
// map returns []

// const users = [{ name: 'Cesar' }, { name: 'Brandon' }];

// const users = { name: 'cesar', empleado: 'brandon', jefe: 'yamit' };

// console.log(Object.values(users)); // returns []

// console.log(Object.keys(users).map((It) => It == 'name'));

// console.log(conjuntoAnimales.map((Itm, Idx) => Itm == '🐄'));

const Devolver = () => {
  const Item = '🔪';

  // Devuelves el item al punto desde donde te llamaron
  return Item;
};

function LlamarDevolver() {
  return Devolver();
}

function LlamarDevolverOtraVez() {
  return LlamarDevolver();
}

console.log(LlamarDevolverOtraVez());
