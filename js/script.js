document.addEventListener('DOMContentLoaded', () => {
//minimum
let Name_Surname_1 = 'Andriy Lavrenchuk';
let Name_Surname_2 = 'Anton Sokol';
let Name_Surname_3 = 'Mariya Dudnyk';
let Name_Surname_4 = 'Dmitry Stepanok';

//Wrong names 
/* let Name_Surname_5 = 'Andriy Lavrinchuk';
let Name_Surname_6 = 'Anton Sokil';
let Name_Surname_7 = 'Mariya Dudko';
let Name_Surname_8 = 'Dmitry Stepanyok';
let Name_Surname_9 = 'Nikolay Kardan'
 */

//normal
console.log('Normal:');

//first
let Name = prompt('What is your name?');
console.log('Hello', Name,';)');

//second
const Year = 2022;
let Birth = prompt('Year of birth?');
console.log('Age:', Year - Birth);

//third
let A = prompt('Input A side');
console.log('P:', 4*A);


//maximum
console.log('Maximum:');

//first
let R = prompt('Input R circle');
let S = (Math.PI * Math.pow(R, 2));
console.log('S:', S.toFixed(2));

//second
let Distance = prompt('How distance between cities?(km)');
let Time = prompt('How many time you have?(hours)');
console.log('Speed you need', Distance/Time,'km/h');

//third
const Dollar = 1.20;
let Euro = prompt('Convert $ to €, 1€ = 1.20$');
console.log('Convert $ to €:', Dollar*Euro);

});