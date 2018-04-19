// Initialize Firebase
var config = {
    apiKey: "AIzaSyAR-DVDyYFcyH1Wbq8pW0xg5_AgYZOfugs",
    authDomain: "myactivity-86771.firebaseapp.com",
    databaseURL: "https://myactivity-86771.firebaseio.com/",
    storageBucket: "myactivity-86771.appspot.com"
}
firebase.initializeApp(config);

window.user = null;

firebase.auth().onAuthStateChanged(function (user) {

    filename = location.pathname.split('/')[location.pathname.split('/').length - 1];
    envLocal = location.host == 'localhost';

    if(user){
        window.user = user;

        if (filename != '') {
            url = "";
            if (!envLocal)
                url = 'https://' + location.host;
            else
                url = 'http://' + location.host + '/FirebaseProjects/myactivity/app'
            window.location = url + '/';
        }
    } else {
        if (filename != 'login.html') {
            url = "";
            if (!envLocal)
                url = 'https://' + location.host;
            else
                url = 'http://' + location.host + '/FirebaseProjects/myactivity/app'
            window.location = url + '/login.html';
        }
    }

    window.user = user;
    callBackAuth(user);
});