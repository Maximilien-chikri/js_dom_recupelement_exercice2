// 1
let myBody = document.getElementsByTagName("body")[0]
console.log(myBody);
// 2
let firstCh = myBody.firstElementChild
console.log(firstCh);
// 3
let lastCh = myBody.lastElementChild
console.log(lastCh);

// 4
let myDiv = document.getElementsByTagName("div")[0]
let exo4 = myDiv.children
console.log(exo4);

// 5
let firstLi = document.getElementsByTagName("li")[0]
let suivant = firstLi.nextElementSibling
console.log(suivant);

// 6
let precedent = suivant.previousElementSibling
console.log(precendent);