var PatternAtividade = function (atividade) {
    this.hashKey = atividade.hashKey || null;
    this.hashGrupo = atividade.hashGrupo || null;
    this.uidUsuario = atividade.uidUsuario || null;
    this.tituloAtividade = atividade.tituloAtividade || "";
    this.descricaoAtividade = atividade.descricaoAtividade || "";
    this.status = atividade.status || 1;
    this.dataHora = atividade.dataHora || new Date().toDBString();
}