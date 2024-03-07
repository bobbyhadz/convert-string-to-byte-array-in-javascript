// EXAMPLE 1 - How to convert a String to a Byte Array in JavaScript

const utf8EncodeText = new TextEncoder();

const str = 'bobbyhadz.com';

const byteArray = utf8EncodeText.encode(str);

// Uint8Array(13) [
//    98, 111,  98,  98, 121,
//   104,  97, 100, 122,  46,
//    99, 111, 109
// ]
console.log(byteArray);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Define a reusable function

// function strToByteArray(str) {
//   return new TextEncoder().encode(str);
// }

// const byteArray1 = strToByteArray('bobbyhadz.com');
// // Uint8Array(13) [
// //    98, 111,  98,  98, 121,
// //   104,  97, 100, 122,  46,
// //    99, 111, 109
// // ]
// console.log(byteArray1);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Decoding the Byte Array back to a string

// const utf8EncodeText = new TextEncoder();

// const str = 'bobbyhadz.com';

// const byteArray = utf8EncodeText.encode(str);

// // Uint8Array(13) [
// //    98, 111,  98,  98, 121,
// //   104,  97, 100, 122,  46,
// //    99, 111, 109
// // ]
// console.log(byteArray);

// const strAgain = new TextDecoder().decode(byteArray);
// console.log(strAgain); // 👉️ bobbyhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// // 👇️ converts a string to a byte array
// function strToByteArray(str) {
//   return new TextEncoder().encode(str);
// }

// // 👇️ converts a byte array to a string
// function byteArrayToStr(buf) {
//   return new TextDecoder().decode(buf);
// }

// const str = 'bobbyhadz.com';

// const byteArray = strToByteArray(str);
// // Uint8Array(13) [
// //    98, 111,  98,  98, 121,
// //   104,  97, 100, 122,  46,
// //    99, 111, 109
// // ]
// console.log(byteArray);

// const strAgain = byteArrayToStr(byteArray);
// console.log(strAgain); // 👉️ bobbyhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using `Buffer.from()` to convert a String to a Byte Array in JavaScript

// const str = 'bobbyhadz.com';

// const byteArray = Buffer.from(str);

// // 👇️ <Buffer 62 6f 62 62 79 68 61 64 7a 2e 63 6f 6d>
// console.log(byteArray);

// console.log(byteArray.toString()); // 👉️ bobbyhadz.com
