function actionSignIn() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_likes');
    firebase.auth().signInWithRedirect(provider);
}

function actionSignOut() {
    firebase.auth().signOut();
}