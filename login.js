// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApT-gHPS0DnfuV1n9BtstXScuPuNoBnrE",
  authDomain: "fizix-57ec5.firebaseapp.com",
  projectId: "fizix-57ec5",
  storageBucket: "fizix-57ec5.appspot.com",
  messagingSenderId: "443770625652",
  appId: "1:443770625652:web:5a88975649d8121ec8fb21"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var auth = getAuth(app);

const login = document.getElementById('login');
login.addEventListener("click", function(event){
    event.preventDefault();
    
    var email = document.getElementById('emailLogInput').value;
    var password = document.getElementById('passwordLogInput').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Loggin in');
        window.location.href = "index.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // ..
    });
});

onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
});

function validate_email(email)
{

}

function validate_password(password)
{

}

function validate_fields(field)
{

}