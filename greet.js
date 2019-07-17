var getName ={};
function Language(){
 
    function greet(language ,userName){
        if(getName["name"] === undefined){
            getName["name"] = userName;
        }
        if(language === "English"){
            return "Hello " + userName;
        }
        else if(language === "Afrikaans"){
            return "Hallo " + userName;
        }
        if(language === "Isixhosa"){
            return "Molo " + userName;
        }
    }

    function getUserName(){
        var names = object.keys(getName)
        return names.length;
    }

    return{
        greet,
        getUserName,
    }
}