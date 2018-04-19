var App = function () { }

App.prototype.response = function (success, data) {
    return { success: success, data: data }
}

App.prototype.parseAtividades = function (atividades) {
    var keys = [];
    var arr = [];

    // Obtem as chaves (hash) das atividades 
    for (i in atividades) keys.push(i)
    for (i in keys) {
        atividades[keys[i]].hashKey = keys[i];
        arr.push(new PatternAtividade(atividades[keys[i]]));
    }
    return arr;
}

App.prototype.showSnack = function (message) {
    /**
     * TODO: Verificar uso da função junto da abertura de modais bootstrap
     */
    var x = document.getElementById("snackbar")
    x.innerHTML = message;
    x.className.replace("show", "");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}