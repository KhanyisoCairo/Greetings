var getNameElem = document.querySelector(".textName");
var submitElem = document.querySelector(".submBtn");
var msgElem = document.querySelector(".msg");
var counterElem = document.querySelector(".counter");


var rdBtn1 = document.querySelectorAll(".radioBtn");

let data = JSON.parse(localStorage.getItem("greetedNames"));

var factoryInstance = greetFactory(data);

function txtBtnClicked() {

    var taal = document.querySelector("input[name ='taal']:checked");

    if (taal) {
        var lang = taal.value;
    }

    if (getNameElem.value !== "") {
        msgElem.innerHTML = factoryInstance.greet(getNameElem.value, lang);

        localStorage.setItem('greetedNames', JSON.stringify(factoryInstance.getName()));
        
    }
    counterFn();
}

function counterFn() {


    counterElem.innerHTML = factoryInstance.getCounter();
}


function reset() {
    localStorage.removeItem('greetedNames');
}

submitElem.addEventListener("click", txtBtnClicked) 

// reset 


window.addEventListener('DOMContentLoaded', (event) => {


    counterFn();
 
});