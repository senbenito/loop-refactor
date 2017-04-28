'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

//use reduce
  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },

  sum: (arr, base) => {
    return arr.reduce(function (result, element){
      return element + result;
    }, base);
  },

//use some
  // someObjsContainProp: (arr, prop) => {
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function (element, index, array){
      if(element.hasOwnProperty(prop)){
        return true;
      }
      return false;
    });
  },

//use map
  // convertNameArrayToObject: (arr) => {
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;
  // },

  convertNameArrayToObject: (arr) => {
    var nameObj = arr.map(function (x){
      let obj = {};
      obj.first = x[0];
      obj.last = x[1];
      return obj;
    });
    return nameObj;
  },

//use every
  // objContainsProp: (arr, prop) => {
  //   for (var i = 0; i < arr.length; i++){
  //     if(!arr[i].hasOwnProperty(prop)){
  //       return false;
  //     }
  //   }
  //   return true;
  // },

  objContainsProp: (arr, prop) => {
    return arr.every(function (element, index, array){
      return element.hasOwnProperty(prop);
    });
  },

//use filter
  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },

  stringMatch: (arr, str) => {
    var matches = arr.filter(function (word){
      if (word.includes(str)){
        return word;
      }
    });
    return matches;
  },

};
