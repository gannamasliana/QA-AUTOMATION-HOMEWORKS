"use strict";
function returnSmth(param) {
    return param;
}
console.log(returnSmth('Hello'));
console.log(returnSmth(5));
function getNumber(a) {
    console.log(a);
}
function getString(a) {
    console.log(a);
}
getNumber(returnSmth(5));
getString(returnSmth('Hello'));
