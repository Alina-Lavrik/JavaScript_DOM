
function passGen(amountOfSimbols){
    var password = "";
    var choise = "0123456789`!@#№$;%:^?&*()_{}[]+=-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < amountOfSimbols; i++){
        password += choise.charAt(Math.floor(Math.random() * choise.length));     
    }
    return password;
}

module.exports = { passGen };

