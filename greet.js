function greetFactory(namesList) {

    var namesGreeted = namesList || {};
    function greet(userName, language) {

        var name = userName.toUpperCase().charAt(0) + userName.slice(1)
        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 1; 
            console.log('here', namesGreeted);
          
        
        } else {
             namesGreeted[name] = namesGreeted[name] + 1;
            console.log('else', namesGreeted);
        }

        if (language === "English") {
            return "Hello, " + name + "!";
        }
        else if (language === "Afrikaans") {
            return "Hallo, " + name + "!";
        }
        if (language === "Isixhosa") {
            return "Molo, " + name + "!";
        }
    }

    function getName() {
        return namesGreeted;
    }

    function clear(){
        namesGreeted = {};
    }

    function getCounter() {
        console.log(Object.keys(namesGreeted).length);
        return Object.keys(namesGreeted).length;

    }
    

    return {
        clear,
        getName,
        greet,
        getCounter,
    }
}