// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getDatabase(app);

const register = document.getElementById('register');
register.addEventListener("click", function(event){
    event.preventDefault();
    
    const username = document.getElementById('usernameRegInput').value;
    const email = document.getElementById('emailRegInput').value;
    const password = document.getElementById('passwordRegInput').value;

    const corecte=JSON.stringify(0);
    const gresite=JSON.stringify(0);

    const form = document.getElementById('formReg');

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        set(ref(db, 'users/' + user.uid), {
            username: username,
            email: email,
            corecte: corecte,
            gresite: gresite
        });
        
        alert('Creating an Account');
        form.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});