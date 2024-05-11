if ("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration failed");
    });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

const firebaseConfig = {
apiKey: "AIzaSyA60h5uFv2b-_CBFoyo8sdFWabM9FUIJY0",
authDomain: "fizix-id.firebaseapp.com",
projectId: "fizix-id",
storageBucket: "fizix-id.appspot.com",
messagingSenderId: "811156590811",
appId: "1:811156590811:web:8913fa5a3fc1ad757fbcfe",
measurementId: "G-NEZQS2P050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

function register()
{
    if(validate_email(email) == false)
    {
        alert('Email-ul nu are un format corespunzator');
        return;
    }

    if(validate_password(password) == false)
    {
        alert('Parola nu are mai mult de 6 caractere');
        return;
    }

    if(validate_fields(email) == false || validate_fields(password) == false)
    {
        alert('Unu sau mai multe câmpuri necompletate');
        return;
    }

    console.log("Register");
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User created');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        })
}

function login()
{
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(validate_fields(email) == false || validate_fields(password) == false)
    {
        alert('Unu sau mai multe câmpuri necompletate');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.user;

        //Adaugam utilizatorul in baza de date
        var database_ref = database.ref();
        var user_data = 
        {
            last_login: Date.now()
        }
        database_ref.child('users/' + user.uid).update(user_data);

        alert('Logat');
    })
    .catch(function(error){
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    })
}

function validate_email(email)
{
    expresion = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expresion.test(email) == true) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function validate_password(password)
{
    //Obligatoriu ca parola sa aiba mai mult de 6 caractere (asa o vrea firebase)
    if(password < 6)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validate_fields(field)
{   
    if(filed == null)
    {
        return false;
    }

    if(filed.lenght <= 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
