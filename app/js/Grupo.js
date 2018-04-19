var Grupo = function () {
    this.reference = firebase.database().ref('/grupos');
}

// Adiciona item de atividade
Grupo.prototype.addGrupo = function (grupo) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.push(grupo).then(snapshot => {
            var key = snapshot.getKey();
            resolve(new App().response(true, { haskKey: key }));
        }).then(err => {
            reject(new App().response(false, { error: err }));
        });
    });
}

// Editar grupo de atividade
Grupo.prototype.editGrupo = function (grupo) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.push(grupo).then(snapshot => {
            resolve(new App().response(true, null));
        }).catch(err => {
            reject(new App().response(false, null));
        });
    });
}

// Remover grupo de atividade
Grupo.prototype.removeGrupo = function (grupo) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.child(grupo.hashKey).remove().then(function () {
            resolve(new App().response(true, null));
        }).catch(err => {
            reject(new App().response(false, null));
        });
    });
}

// Retorna todos as grupos
Grupo.prototype.getAllGrupo = function (grupo) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.push(grupo).then(snapshot => {
            var key = snapshot.getKey();
            resolve(new App().response(true, { haskKey: key }));
        });
    });
}