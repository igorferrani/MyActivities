var Atividade = function () {
    this.reference = firebase.database().ref('/atividades');
}

// Adiciona item de atividade
Atividade.prototype.addAtividade = function (atividade) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.push(atividade).then(snapshot => {
            var key = snapshot.getKey();
            resolve(new App().response(true, { haskKey: key }));
        }).catch(err => {
            reject(new App().response(false, { error: err }));
        });
    });
}

// Editar item de atividade
Atividade.prototype.editAtividade = function (atividade) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.child(atividade.hashKey).set(atividade).then(function () {
            resolve(new App().response(true, null));
        }).catch(function () {
            resolve(new App().response(false, null));
        });
    });
}

// Alterar status da atividade
Atividade.prototype.updateStatusAtividade = function (atividade) {
    _self = this;
    return new Promise(function (resolve, reject) {
        newStatus = atividade.status == 1 ? 2 : 1;
        _self.reference.child(atividade.hashKey + '/status').set(newStatus).then(function () {
            resolve(new App().response(true, null));
        }).catch(function () {
            resolve(new App().response(false, null));
        });
    });
}

// Remover item de atividade
Atividade.prototype.removeAtividade = function (atividade) {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.child(atividade.hashKey).remove().then(function () {
            resolve(new App().response(true, null));
        }).catch(err => {
            reject(new App().response(false, null));
        });
    });
}

// Retorna todas as atividades
Atividade.prototype.getAllAtividade = function () {
    _self = this;
    return new Promise(function (resolve, reject) {
        _self.reference.orderByChild("uidUsuario").equalTo(window.user.uid).on('value', function (snap) {
            resolve(snap);
        })
    });
}