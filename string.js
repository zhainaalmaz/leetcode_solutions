// const closeSecondDives = (string) => {
//   let unknown = "";
//   let divCounter = 0;
//   let fixedHtml = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "<") {
//       for (let j = 1; j < 5; j++) {
//         unknown += string[i + j];
//       }
//     }
//     if (unknown === "div>") {
//       divCounter++;
//       if (divCounter % 2 === 0) {
//         fixedHtml += string[i] + "/";
//         unknown = "";
//         continue;
//       }
//     }
//     fixedHtml += string[i];
//     unknown = "";
//   }
//   return fixedHtml;
// };

// console.log(closeSecondDives("<div><p>hello</p><div>"));

// var strStr = function (haystack, needle) {
//   if (needle === "") {
//     return 0;
//   }
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (haystack.substr(i, needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1;
// };

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
